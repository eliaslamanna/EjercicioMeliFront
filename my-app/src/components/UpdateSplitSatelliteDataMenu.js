import React, {Component} from 'react';
import {Link, Router} from 'react-router-dom';
import axios from 'axios';

class UpdateSplitSatelliteDataMenu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            shipData: {}
        }
    }

    render() {
        return (
            <>
               <Link to='/topsecret_split/Kenobi'>Kenobi</Link>
               <br/>
               <Link to='/topsecret_split/Skywalker'>Skywalker</Link>
               <br/>
               <Link to='/topsecret_split/Sato'>Sato</Link>
               <br/>
               <br/>
               <Link to='/topsecret_split'>GET</Link>
            </>
        )
    }
}

export default UpdateSplitSatelliteDataMenu;