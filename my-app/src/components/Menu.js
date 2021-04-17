import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';
import '../styles/Menu.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class Menu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="mainTitle p-2">
                    <h1>Fuego Quasar Operation</h1>
                </div>
                <div className="actions pt-3">
                    <h2>Actions</h2>
                </div>

                {this.props.opciones.map(opcion => 
                    <Button className="mt-3 mb-5 mr-2 ml-2" size="lg" variant="info"><Link style={{ textDecoration: 'none' }} to={opcion.path}><div className="link">{opcion.name}</div></Link></Button>
                )}
            </div>
        )
    }
}

export default Menu;