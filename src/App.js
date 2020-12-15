import React from 'react';
//import './App.css';
import '@instructure/canvas-theme';
import MyHeading from './Components/Base/header';
import Nav from './Components/Base/nav'
import Resultaten from './Components/resultaten';
import Student from "./Components/student";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
      <Router basename='./componenten'>
        <div className="App" >
          <MyHeading/>
          <Nav/>
          <Switch>
            <Route path='/resultaten' component={Resultaten}/>
            <Route path='/student' component={Student}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;

