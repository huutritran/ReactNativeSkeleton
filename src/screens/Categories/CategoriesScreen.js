import React from 'react';
import {View} from 'react-native';
import {Helpers} from '../../theme';
import {CategoryGrid} from '../../components';

const CategoriesScreen = () => {
  return (
    <View style={[Helpers.fill, Helpers.center]}>
      <CategoryGrid />
    </View>
  );
};

export default CategoriesScreen;
