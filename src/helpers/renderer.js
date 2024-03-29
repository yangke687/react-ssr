import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import routes from '../client/routes';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={{}} location={req.path}>
        <div>{renderRoutes(routes)}</div>
      </StaticRouter>
    </Provider>,
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.INIT_STATE = ${JSON.stringify(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
