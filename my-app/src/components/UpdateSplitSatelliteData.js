import React, {useState} from 'react';
import {Link, Router} from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function UpdateSplitSatelliteData(props) {

    const [satellite, setSatellite] = useState({
        name: props.match.params.satellite_name,
        distance: '',
        message: []
    });

    let handleChange = (event) => {
        if(event.target.name === "message") {
            setSatellite({...satellite, [event.target.name]: event.target.value.split(",")});
        }
        else{
            setSatellite({...satellite, [event.target.name]: event.target.value});
        }
         event.preventDefault();
    }

    let history = useHistory();

    let handleForm = (event) => {

        var randNumber = Math.floor(Math.random() * 3);
        for(var i = 0; i < randNumber; i ++) {
            setSatellite({...satellite, [satellite.message]: satellite.message.unshift(" ")});
        }

        history.push(
            {
                pathname:"/satelliteData",
                state:satellite
            }
         );


        event.stopPropagation();
        event.preventDefault();

    }
    
    return (
        <div>
            <form onSubmit={handleForm}>
                <h3>{satellite.name} information:</h3>
                <input type="number" placeholder={satellite.name + " distance"} name="distance" value={satellite.distance} onChange={(event)=>handleChange(event)}/>
                <br/>
                <input type="text" placeholder={satellite.name + " message"} name="message" value={satellite.message} onChange={(event)=>handleChange(event)}/>

                <br/>
                <input variant="primary" value="Insert information" type="submit"/>
            </form>
        </div>
    )
}

export default UpdateSplitSatelliteData;