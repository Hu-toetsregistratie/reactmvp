import React, { Component } from 'react';
// import './App.css';
import '@instructure/canvas-theme';
import Body from "./components/body/Body";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header title={"Hello... how do u do"}/>
          <Body />
        </div>
    );
  }
}

export default App;
