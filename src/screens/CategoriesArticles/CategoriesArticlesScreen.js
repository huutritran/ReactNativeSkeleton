import React from 'react';
import {View} from 'react-native';
import {Helpers} from '../../theme';
import {ArticleList} from '../../components';

const CategoriesArticlesScreen = () => {
  return (
    <View style={[Helpers.fill]}>
      <ArticleList />
    </View>
  );
};

export default CategoriesArticlesScreen;
