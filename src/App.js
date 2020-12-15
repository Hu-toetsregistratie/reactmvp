import {BrowserRouter as Router} from "react-router-dom";
import {BaseRouter} from "./Routes";
import '@instructure/canvas-theme';
import React from "react";
import {CijfersView2} from "./Components/Containers/CijfersView2";

function App() {
  return (
      <div className="App">
       <Router>
           <BaseRouter />
       </Router>
      </div>

  );

}

export default App;

