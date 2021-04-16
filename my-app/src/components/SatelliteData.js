import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

class SatelliteData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            satellite : props.location.state,
            resp: {}
        }
    }

    componentDidMount() {
        this.state.satellite.distance = parseFloat(this.state.satellite.distance);
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: this.state.satellite,
            url: 'http://localhost:8080/topsecret_split/' + this.state.satellite.name
        };
        axios(options)
            .then((response) => {this.state.resp = response;})
            .catch(error => {
                console.log( 'the error has occured: ' + error);
                this.setState({
                    resp: error.response.data
                })
            })
    }

    render(){
        return (
            <>
                {this.state.satellite.position == null ? <p>The position could not be retrieved</p> : <p>The position is: {this.state.satellite.position}</p>}
                {this.state.satellite.message == null ? <p>El message could not be retrieved</p> : <p>The message is: {this.state.satellite.message}</p>}
            </>
        )
    }

}

export default SatelliteData;
