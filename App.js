/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import Route from './Routing';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducer from './src/services/reducer';

export let store = compose(
  applyMiddleware(ReduxThunk),
  autoRehydrate()
)(createStore)(reducer);

persistStore(store, {storage: AsyncStorage});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>   
    );
  }
}

console.disableYellowBox = true;
