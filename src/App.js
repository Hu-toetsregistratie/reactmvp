import React, { Component } from 'react';
// import './App.css';
import '@instructure/canvas-theme';
import BarChartView from './container/BarChartView'
// import Body from "./components/Body";
// import Header from "./components/test/Header";

class App extends Component {
  render() {
    return (
        <div className="App">
            <BarChartView />
        </div>
    );
  }
}

export default App;
