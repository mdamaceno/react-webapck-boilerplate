import React from 'react';
import { render } from 'react-dom';
import { 
  browserHistory,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import routes from './routes';

const MappedRoutes = () => {
  return routes.childRoutes.map((route, i) =>
    (<Route exact path={ route.path } component={ route.component } key={ i } />)
  );
}

render(
  <Router history={ browserHistory }>
    <MappedRoutes/>
  </Router>
  , document.getElementById('root'));