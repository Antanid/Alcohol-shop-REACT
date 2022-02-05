import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EmailCheck, State } from './Redux/State';

ReactDOM.render(
  <React.StrictMode>
    <App State={State} EmailCheck={EmailCheck}/>
  </React.StrictMode>,
  document.getElementById('root')
);


