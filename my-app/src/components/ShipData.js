import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import '../styles/ShipData.css';


class ShipData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            satellites: props.location.state.satellites,
            shipData: {}
        }
    }

    componentDidMount() {
        this.state.satellites[0].distance = parseFloat(this.state.satellites[0].distance);
        this.state.satellites[1].distance = parseFloat(this.state.satellites[1].distance);
        this.state.satellites[2].distance = parseFloat(this.state.satellites[2].distance);
        const options = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            data: this.state,
            url: 'http://localhost:8080/topsecret'
        };
        axios(options)
            .then((response) => { this.state.shipData = response; })
            .catch(error => {
                console.log('the error has occured: ' + error);
                this.setState({
                    shipData: error.response.data
                })
            })
    }

    render() {
        return (
            <>
                <div className="p-3">
                    {this.state.shipData.position == null ? <h5>The <strong>position</strong> could not be retrieved</h5> : <h5>The <strong>position</strong> is <strong>{this.state.shipData.position}</strong></h5>}
                </div>
                <div className="p-3">
                    {this.state.shipData.message == null ? <h5>El <strong>message</strong> could not be retrieved</h5> : <h5>The <strong>message</strong> is <strong>{this.state.shipData.message}</strong></h5>}
                </div>
            </>
        )
    }

}

export default ShipData;
