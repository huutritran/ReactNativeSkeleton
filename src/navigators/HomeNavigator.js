import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopHeadlinesScreen from '../screens/TopHeadlines/TopHeadlinesScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import ScreenIds from '../screens/ScreenIds';

const HomeTab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        name={ScreenIds.TopHeadlines}
        component={TopHeadlinesScreen}
      />
      <HomeTab.Screen
        name={ScreenIds.Categories}
        component={CategoriesScreen}
      />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
