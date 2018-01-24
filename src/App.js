import React, { Component } from 'react';
import {
  View
} from 'react-native';

import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';

import AppStyles from './AppStyles';
import AuthorizedRoute from './AuthorizedRoute';
import PrimaryLayout from './components/layouts/PrimaryLayout';
import UnauthorizedLayout from './components/layouts/UnauthorizedLayout';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={AppStyles.appContainer}>
        <NativeRouter>
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/" component={PrimaryLayout} />
            <Redirect to="/auth" />
          </Switch>
        </NativeRouter>
      </View>
    );
  }
}
