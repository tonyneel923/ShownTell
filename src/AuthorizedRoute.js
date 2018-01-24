import React from 'react';
import { Route, Redirect } from 'react-router-native';
import { connect } from 'react-redux';
import {
  View
} from 'react-native';

class AuthorizedRoute extends React.Component {

  componentWillMount() {
    // getLoggedUser();
  }

  render() {
    const { component: Component, pending, isLoggedIn, ...rest } = this.props;

    return (
      <Route {...rest} render={props => {
        if (pending) return <View>Loading...</View>
        return isLoggedIn
          ? <Component {...props} />
          : <Redirect to="/auth/login" />
      }} />
    );
  }
}

const mapStateToProps = () => {
  return (state, props) => {
    return {
      isLoggedIn: state.users.get('isLoggedIn'),
      // add pending for loading logic
    };
  };
};

export default connect(mapStateToProps)(AuthorizedRoute);
