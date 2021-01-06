import "./App.css";
import {BrowserRouter as Router} from "react-router-dom";
import {BaseRouter} from "./Routes";
import {SideNav} from "./Components/Base/SideNav";


import '@instructure/canvas-theme';
import React from "react";


function App() {
  return (
      <div className="App">
          <Router>
              <SideNav />
              <BaseRouter />
          </Router>
      </div>
  );
}

export default App;

