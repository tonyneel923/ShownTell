import React from 'react';
import { Switch, Route, Redirect } from 'react-router-native';
import {
  View
} from 'react-native';

// Pages
import LoginPage from '../pages/LoginPage';

const UnauthorizedLayout = () => (
  <View>
    {/*

    Imagine this could be a general layout for all unauthorized pages like
    the login page, forgot password, email-verified, etc...

    For this example project, we'll just have a Login Page

    */}
    <Switch>
      <Route path="/auth/login" component={LoginPage} />
      <Redirect to="/auth/login" />
    </Switch>
  </View>
);

export default UnauthorizedLayout;
