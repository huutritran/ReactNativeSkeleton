import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import AnotherScreen from '../screens/Another/AnotherScreen';
import ScreenIds from '../screens/ScreenIds';
import {navigationRef, isReadyRef} from '../services/NavigationService';

const AppStack = createStackNavigator();

const AppNavigator = ({navigation}) => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <AppStack.Navigator>
        <AppStack.Screen name={ScreenIds.Home} component={HomeScreen} />
        <AppStack.Screen name={ScreenIds.Another} component={AnotherScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
