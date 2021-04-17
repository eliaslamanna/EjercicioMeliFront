import React, { useState } from 'react';
import { Link, Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import '../styles/FindShipInformation.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function FindShipInformation() {

    const [kenobi, setEstadoKenobi] = useState({
        name: 'Kenobi',
        distance: '',
        message: []
    })

    const [skywalker, setEstadoSkywalker] = useState({
        name: 'Skywalker',
        distance: '',
        message: []
    })

    const [sato, setEstadoSato] = useState({
        name: 'Sato',
        distance: '',
        message: []
    })

    let satellites = {
        satellites: [kenobi, skywalker, sato]
    };

    let history = useHistory();

    let handleForm = (event, valor) => {

        var randKenobi = Math.floor(Math.random() * 3);
        for (var i = 0; i < randKenobi; i++) {
            setEstadoKenobi({ ...kenobi, [kenobi.message]: kenobi.message.unshift(" ") });
        }

        var randSkywalker = Math.floor(Math.random() * 3);
        for (var x = 0; x < randSkywalker; x++) {
            setEstadoSkywalker({ ...skywalker, [skywalker.message]: skywalker.message.unshift(" ") });
        }

        var randSato = Math.floor(Math.random() * 3);
        for (var y = 0; y < randSato; y++) {
            setEstadoSato({ ...sato, [sato.message]: sato.message.unshift(" ") });
        }

        history.push(
            {
                pathname: "/shipData",
                state: satellites
            }
        );


        event.stopPropagation();
        event.preventDefault();
    }

    let handleKenobi = (event) => {
        if (event.target.name === "message") {
            setEstadoKenobi({ ...kenobi, [event.target.name]: event.target.value.split(",") });
        }
        else {
            setEstadoKenobi({ ...kenobi, [event.target.name]: event.target.value });
        }
        event.preventDefault();
    }

    let handleSkywalker = (event) => {
        if (event.target.name === "message") {
            setEstadoSkywalker({ ...skywalker, [event.target.name]: event.target.value.split(",") });
        }
        else {
            setEstadoSkywalker({ ...skywalker, [event.target.name]: event.target.value });
        }
        event.preventDefault();
    }

    let handleSato = (event) => {
        if (event.target.name === "message") {
            setEstadoSato({ ...sato, [event.target.name]: event.target.value.split(",") });
        }
        else {
            setEstadoSato({ ...sato, [event.target.name]: event.target.value });
        }

        event.preventDefault();
    }

    return (
        <div className="form">
            <Form onSubmit={handleForm}>
                <div className="d-flex justify-content-center">
                    <div className="p-3 mr-5 ml-5 container">
                        <h3>Kenobi</h3>
                        <Form.Group controlId="kenobiDistance">
                            <Form.Control type="number" placeholder="Kenobi distance" name="distance" value={kenobi.distance} onChange={(event) => handleKenobi(event)}/>
                        </Form.Group>
                        <Form.Group controlId="kenobiMessage">
                            <Form.Control type="text" placeholder="Kenobi message" name="message" value={kenobi.message} onChange={(event) => handleKenobi(event)}/>
                        </Form.Group>
                    </div>
                    <div className="p-3 mr-5 ml-5 container">
                        <h3>Skywalker</h3>
                        <Form.Group controlId="skywalkerDistance">
                            <Form.Control type="number" placeholder="Skywalker distance" name="distance" value={skywalker.distance} onChange={(event) => handleSkywalker(event)}/>
                        </Form.Group>
                        <Form.Group controlId="skywalkerMessage">
                            <Form.Control type="text" placeholder="Skywalker message" name="message" value={skywalker.message} onChange={(event) => handleSkywalker(event)}/>
                        </Form.Group>
                    </div>
                    <div className="p-3 mr-5 ml-5 container">
                        <h3>Sato</h3>
                        <Form.Group controlId="satoDistance">
                            <Form.Control type="number" placeholder="Sato distance" name="distance" value={sato.distance} onChange={(event) => handleSato(event)}/>
                        </Form.Group>
                        <Form.Group controlId="satoMessage">
                            <Form.Control type="text" placeholder="Sato message" name="message" value={sato.message} onChange={(event) => handleSato(event)}/>
                        </Form.Group>
                    </div>
                </div>
                <Button className="mt-5 mb-5 mr-2 ml-2" size="lg" variant="info" type="submit">Ship Information</Button>
            </Form>
        </div>
    )

}

export default FindShipInformation;