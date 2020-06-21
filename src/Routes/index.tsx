import React from 'react';
import { Switch } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import InsertUser from '../pages/InsertUser/InsertUser';
import EditUser from '../pages/EditUser/EditUser';
import Users from '../pages/Users/Users';
import Route from '../Routes/Route'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/users/edit/:id" component={EditUser} isPrivate />
      <Route path="/users/create" component={InsertUser} isPrivate />
      <Route path="/users/" component={Users} isPrivate />
    </Switch>
  );
};

export default Routes;
