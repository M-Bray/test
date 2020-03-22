import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import { Route, Switch } from 'react-router-dom';
import ProtectedRoute from './utilComponents/ProtectedRoute';
import DashboardPage from './Dashboard/DashboardPage'


function App() {

  return (
    <Switch>
      <ProtectedRoute path="/dashboard" component={DashboardPage} />
      <Route path={'/login'} component={LoginPage} />
      <Route path={'/'} component={SignUpPage} />
    </Switch>
  );
}

export default App;
