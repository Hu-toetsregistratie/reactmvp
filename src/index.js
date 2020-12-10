import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FetchGrades from "./components/FetchGrades/FetchGrades";

ReactDOM.render(
  <React.StrictMode>
      <FetchGrades />
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);
