import React from 'react';
import { Switch, Route, Redirect } from 'react-router-native';
import HomePage from '../pages/HomePage';
import PrimaryHeader from '../ui/PrimaryHeader/PrimaryHeader';
import {
  View
} from 'react-native';

// Sub Layouts
import UserSubLayout from './UserSubLayout';

const PrimaryLayout = ({ match }) => (
  <View>
    <PrimaryHeader />
    <View>
      <Switch>
        <Route path={'/'} exact component={HomePage} />
        <Route path={'/users'} component={UserSubLayout} />
        <Redirect to={'/'} />
      </Switch>
    </View>
  </View>
);

export default PrimaryLayout;
