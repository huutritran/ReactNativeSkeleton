import React from 'react';
import {View} from 'react-native';
import {Helpers} from '../../theme';
import {ArticleList} from '../../components';

const CategoriesArticlesScreen = ({route}) => {
  const category = route.params.name ?? '';
  return (
    <View style={[Helpers.fill]}>
      <ArticleList category={category.toLowerCase()} />
    </View>
  );
};

export default CategoriesArticlesScreen;
