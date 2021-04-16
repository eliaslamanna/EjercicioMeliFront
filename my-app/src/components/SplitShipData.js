import React, {Component} from 'react';
import {Link, Router} from 'react-router-dom';
import axios from 'axios';

class SplitShipData extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            shipData: {}
        }
    }

    componentDidMount(){

        axios.get('http://localhost:8080/topsecret_split')
        .then(res => {
            this.setState({shipData: res.data});
        })
        .catch(error => {
            console.log( 'the error has occured: ' + error);
            this.setState({
                shipData: error.response.data
            })
            console.log(this.state.shipData);
        }) 
    }

    render() {
        return (
            <>
                {this.state.shipData.position == null ? <p>The position could not be retrieved</p> : <p>The position is: {this.state.shipData.position}</p>}
                {this.state.shipData.message == null ? <p>El message could not be retrieved</p> : <p>The message is: {this.state.shipData.message}</p>}
            </>
        )
    }
}

export default SplitShipData;