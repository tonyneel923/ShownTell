import React from 'react';
import { Link } from 'react-router-native';
import {
  View,
  Text,
  Platform
} from 'react-native';

// must have extension .module.* in order for css-modules to recognize it
// import styles from './PrimaryHeader.module.scss';

const PrimaryHeader = () => {
  const platform = Platform.select({
    ios: 'ios',
    android: 'android',
  });
  return (
    <View>
      <Text>Welcome to our {platform} app!</Text>
      <View>
        <Link to="/" exact ><Text>Home</Text></Link>
        <Link to="/users/3" ><Text>Users</Text></Link>
        <Link to="/products" ><Text>Products</Text></Link>
      </View>
    </View>
  );
}

export default PrimaryHeader;
