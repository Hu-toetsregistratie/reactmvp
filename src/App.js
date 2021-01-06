import "./App.css";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {BaseRouter} from "./Routes";


import '@instructure/canvas-theme';
import React from "react";


function App() {
  return (
      <div className="App">
          <Router>
              <div className="Navbar">
                  <nav className='side-nav'>
                      <Link to="/">Home</Link>
                      <Link to="/Resultaten">Resultaten</Link>
                      <Link to="/Studenten">Studenten</Link>
                      <Link to="/IndividueleStudent">Individuele student</Link>
                      <Link to="/Histogram">Statistiek</Link>
                  </nav>
              </div>
              <BaseRouter />
          </Router>
      </div>
  );

}

export default App;

