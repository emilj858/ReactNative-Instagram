import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import AppReducer from './reducers';
// import AppWithNavigationState from './navigators/AppNavigator';
import AppWithNavigator from './navigators/AppNavigator';

class InstaCloneApp extends React.Component {
  // store = createStore(AppReducer, {}, applyMiddleware(
  //   promiseMiddleware()
  // ));

  render() {
    return (
      // <Provider store={this.store}>
        <AppNavigator />
      // </Provider>
    );
  }
}

export default InstaCloneApp;