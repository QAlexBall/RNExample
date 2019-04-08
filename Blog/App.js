/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Article from './src/Container/Article/Article'
import { createStore, applyMiddleware } from 'redux'
import reducer from './src/reducers/index'
import rootSaga from './src/saga/saga'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'
import ArticleList from './src/Container/Article/ArticleList';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
            <ArticleList />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
