// startup point of the client side application

import React from 'react';
import ReactDOM from 'react-dom';
//import Home from './components/Home';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
, document.querySelector('#root'));
