import React from 'react';
import {View} from 'react-native';
import {Helpers} from '../../theme';
import {AppText} from '../../components';

const CategoriesScreen = () => {
  return (
    <View style={[Helpers.fill, Helpers.center]}>
      <AppText>CategoriesScreen</AppText>
    </View>
  );
};

export default CategoriesScreen;
