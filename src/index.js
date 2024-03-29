import express from 'express';
import { matchRoutes } from 'react-router-config';
import routes from './client/routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore();

  // Some logic to initialize
  // and load data into the store
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = matchedRoutes.map(({ route }) => {
    if (route.loadData) {
      return route.loadData(store);
    }
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
