import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/UpdateSplitSatelliteDataMenu.css';



class UpdateSplitSatelliteDataMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            shipData: {}
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h5>Choose satellite to update</h5>
                </div>
                <div>
                    <Button className="button mt-3 mb-5 mr-2 ml-2" variant="outline-info">
                        <Link className="linkContainer" style={{ textDecoration: 'none' }} to='/topsecret_split/Kenobi'>Kenobi</Link>
                    </Button>
                    <Button className="button mt-3 mb-5 mr-2 ml-2" variant="outline-info">
                        <Link className="linkContainer" style={{ textDecoration: 'none' }} to='/topsecret_split/Skywalker'>Skywalker</Link>
                    </Button>
                    <Button className="button mt-3 mb-5 mr-2 ml-2" variant="outline-info">
                        <Link className="linkContainer" style={{ textDecoration: 'none' }} to='/topsecret_split/Sato'>Sato</Link>
                    </Button>
                </div>
                <div>
                    <Button className="button mt-3 mb-5 mr-2 ml-2" size="lg" variant="info">
                        <Link className="getButton" style={{ textDecoration: 'none' }} to='/topsecret_split'>Get Ship Information</Link>
                    </Button>
                </div>
            </div>
        )
    }
}

export default UpdateSplitSatelliteDataMenu;