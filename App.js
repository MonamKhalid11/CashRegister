import React, { Component } from 'react';
import { SafeAreaView } from 'react-native'
import RootStack from './Src/Screens/RootStack/RootStack'
// import store from './app/store'
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux'
const persistenceKey = "persistenceKey"
import allReducers from './Src/redux/reducers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger'


import { persistStore, persistReducer } from 'redux-persist';

 


const persistConfig = {
  key: 'bbb',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger)

);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <RootStack />
        </SafeAreaView>
      </Provider>
    )
  }
}