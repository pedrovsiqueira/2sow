import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/edit/:id" component={Home} />
      <Route path="/user/create" component={Home} />
      <Route path="/login" component={Home} />
      <Route path="/signup" component={Home} />
    </Switch>
  );
};

export default Routes;
