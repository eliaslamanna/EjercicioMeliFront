import FindShipInformation from './components/FindShipInformation';
import ShipData from './components/ShipData';
import SplitShipData from './components/SplitShipData';
import Menu from './components/Menu';
import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';

function App() {

  const[estado,setEstado] = useState({
    opcionesMenu:[{name:'findShipInformation',path:"/findShipInformation"},{name:'updateSplitSatelliteData',path:"/updateSplitSatelliteData"},{name:'getShipSplitInformation',path:'/getShipSplitInformation'}],
  })

  return (
      <BrowserRouter>
        <Menu opciones={estado.opcionesMenu}></Menu>
        <Route exact path='/findShipInformation' component={()=><FindShipInformation />}/>
        <Route exact path='/shipData' render={(props)=><ShipData {...props} state={props}/>}/>
        <Route exact path='/getShipSplitInformation' component={()=><SplitShipData/>}/>
      </BrowserRouter>
  );
}

export default App;
