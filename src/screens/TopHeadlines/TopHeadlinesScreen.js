import React from 'react';
import {View} from 'react-native';
import {Helpers} from '../../theme';
import {AppText} from '../../components';

const TopHeadlinesScreen = () => {
  return (
    <View style={[Helpers.fill, Helpers.center]}>
      <AppText>TopHeadlinesScreen</AppText>
    </View>
  );
};

export default TopHeadlinesScreen;