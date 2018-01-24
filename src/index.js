import React, { Component } from 'react';

import App from './App';
import { Provider } from 'react-redux';
import Store from './store';

const store = Store();

export default class Index extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
