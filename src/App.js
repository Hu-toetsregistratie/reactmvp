import React from "react";
import { StudentView } from "./Container/StudentView.js"
import { CijfersView } from './Container/CijfersView'
import '@instructure/canvas-theme';


function App() {
  return (
    <div className="App">
        <StudentView />
        <CijfersView />
    </div>
  );
}

export default App;
