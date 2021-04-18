import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function UpdateSplitSatelliteData(props) {

    const [satellite, setSatellite] = useState({
        name: props.match.params.satellite_name,
        distance: '',
        message: []
    });

    let handleChange = (event) => {
        if (event.target.name === "message") {
            setSatellite({ ...satellite, [event.target.name]: event.target.value.split(",") });
        }
        else {
            setSatellite({ ...satellite, [event.target.name]: event.target.value });
        }
        event.preventDefault();
    }

    let history = useHistory();

    let handleForm = (event) => {

        var randNumber = Math.floor(Math.random() * 3);
        for (var i = 0; i < randNumber; i++) {
            setSatellite({ ...satellite, [satellite.message]: satellite.message.unshift(" ") });
        }

        history.push(
            {
                pathname: "/satelliteData",
                state: satellite
            }
        );


        event.stopPropagation();
        event.preventDefault();

    }

    return (
        <div>
            <Form onSubmit={handleForm}>
                <div className="d-flex justify-content-center">
                    <div className="p-3 mr-5 ml-5">
                        <h3>{satellite.name} information</h3>
                        <Form.Group controlId="kenobiDistance">
                            <Form.Control className="input" type="number" placeholder={satellite.name + " distance"} name="distance" value={satellite.distance} onChange={(event) => handleChange(event)} />
                        </Form.Group>
                        <Form.Group controlId="kenobiMessage">
                            <Form.Control className="input" type="text" placeholder={satellite.name + " message"} name="message" value={satellite.message} onChange={(event) => handleChange(event)} />
                        </Form.Group>
                    </div>
                </div>
                <Button className="mt-5 mb-5 mr-2 ml-2" size="lg" variant="info" type="submit">Insert information</Button>
            </Form>
        </div>
    )
}

export default UpdateSplitSatelliteData;