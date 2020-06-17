import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import InsertUser from '../pages/InsertUser/InsertUser';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/user/edit/:id" component={Home} />
      <Route path="/user/create" component={InsertUser} />
      <Route path="/login" component={Home} />
      <Route path="/signup" component={Home} />
    </Switch>
  );
};

export default Routes;
