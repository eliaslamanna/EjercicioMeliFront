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
                <div className="p-3">
                    {this.state.satellite.distance == null ? <h5>The <strong>distance</strong> could not be updated</h5> : <h5>The <strong>distance</strong> was updated succesfully</h5>}
                </div>
                <div className="p-3">
                    {this.state.satellite.message == null ? <h5>El <strong>message</strong> could not be updated</h5> : <h5>The <strong>message</strong> was updated successfully</h5>}
                </div>
            </>
        )
    }

}

export default SatelliteData;
