/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import AppNavigator from './navigators/AppNavigator';
import {Helpers} from './theme';
import {Provider} from 'react-redux';
import {store} from './stores';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={Helpers.fill}>
        <AppNavigator />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
