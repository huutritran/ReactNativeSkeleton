import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import ScreenIds from '../screens/ScreenIds';
import DetailArticleScreen from '../screens/DetailArticle/DetailArticleScreen';
import {navigationRef, isReadyRef} from '../services/NavigationService';
import {displayName} from '../../app.json';
const AppStack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{title: displayName}}
          name={ScreenIds.HomeNavigator}
          component={HomeNavigator}
        />
        <AppStack.Screen
          name={ScreenIds.DetailArticle}
          component={DetailArticleScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
