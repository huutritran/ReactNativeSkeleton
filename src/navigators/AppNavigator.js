import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNavigator from './HomeNavigator';
import ScreenIds from '../screens/ScreenIds';
import DetailArticleScreen from '../screens/DetailArticle/DetailArticleScreen';
import {navigationRef, isReadyRef} from '../services/NavigationService';
import {displayName} from '../../app.json';
import CustomIcon from '../assets/icons/CustomIcon';
import {ICONS} from '../assets/icons';
import {Metrics} from '../theme';

const AppStack = createStackNavigator();

const createHeaderButton = ({name, onPress, size = 16}) => {
  const props = {name, onPress, size};
  return <CustomIcon style={Metrics.smallHorizontalMargin} {...props} />;
};

const AppNavigator = () => {
  const onChooseSources = () => {
    alert('On choose sources');
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <AppStack.Navigator>
        <AppStack.Screen
          options={{
            title: displayName,
            headerRight: () =>
              createHeaderButton({
                name: ICONS.SOURCES,
                onPress: onChooseSources,
              }),
            headerLeft: () =>
              createHeaderButton({
                name: ICONS.MENU,
                onPress: onChooseSources,
                size: 20,
              }),
          }}
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
