import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

const RouterApp = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        {routes.map(route => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.isExact}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default RouterApp;
