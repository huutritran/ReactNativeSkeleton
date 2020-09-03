import React from 'react';
import {View} from 'react-native';
import {Helpers, ApplicationStyles} from '../../theme';
import {ArticleList} from '../../components';

const TopHeadlinesScreen = () => {
  return (
    <View style={[Helpers.fill, ApplicationStyles.backgroundColor]}>
      <ArticleList />
    </View>
  );
};

export default TopHeadlinesScreen;
