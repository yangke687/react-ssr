// startup point of the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root'),
);
