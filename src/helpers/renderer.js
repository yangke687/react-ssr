import React from 'react';
import { renderToString } from 'react-dom/server';
//import Home from '../client/components/Home';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/routes';

export default (req) => {
  const content = renderToString(
    <StaticRouter contenxt={{}} location={req.path}>
      <Routes />
    </StaticRouter>
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