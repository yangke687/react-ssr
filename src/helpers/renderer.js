import React from 'react';
import { renderToString } from 'react-dom/server';
//import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter contenxt={{}} location={req.path}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};