import React from 'react';
import { Switch, Route } from 'react-router-native';
import {
  View
} from 'react-native';

// pages
import UserProfilePage from '../pages/UserProfilePage';

const UserSubLayout = ({ match }) => (
  <View>
    <View>
      <Switch>
        <Route path={'/users/:userId'}  component={UserProfilePage} />
      </Switch>
    </View>
  </View>
);

export default UserSubLayout;
