import React from 'react';
//import './App.css';
import '@instructure/canvas-theme';
import MyHeading from './Components/Base/header';
import Nav from './Components/Base/nav'
import Resultaten from './Components/resultaten';
import Student from "./Components/student";
import Toets from "./Components/toets";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
      <Router>
        <div className="App" >
          <MyHeading/>
          <Nav/>
          <Switch>
            <Route path='/resultaten' component={Resultaten}/>
            <Route path='/student' component={Student}/>
              <Route path='/toets' component={Toets}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

