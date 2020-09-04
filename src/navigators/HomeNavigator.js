import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopHeadlinesScreen from '../screens/TopHeadlines/TopHeadlinesScreen';
import CategoriesScreen from '../screens/Categories/CategoriesScreen';
import ScreenIds from '../screens/ScreenIds';
import {STRINGS} from '../assets/localize/String';
import {useLanguages} from '../stores/AppSettings';

const HomeTab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  const topHeadLineTitle = useLanguages(STRINGS.common.top_headlines);
  const categoriesTitle = useLanguages(STRINGS.common.categories);
  return (
    <HomeTab.Navigator>
      <HomeTab.Screen
        options={{title: topHeadLineTitle}}
        name={ScreenIds.TopHeadlines}
        component={TopHeadlinesScreen}
      />
      <HomeTab.Screen
        options={{title: categoriesTitle}}
        name={ScreenIds.Categories}
        component={CategoriesScreen}
      />
    </HomeTab.Navigator>
  );
};

export default HomeNavigator;
