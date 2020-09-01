import React from 'react';
import {View} from 'react-native';
import {STRINGS} from '../../assets/localize/String';
import {AppText, AppButton} from '../../components';
import {Helpers} from '../../theme';
import ScreenIds from '../ScreenIds';
import {navigate} from '../../services/NavigationService';

const AnotherScreen = () => {
  const goBack = () => navigate(ScreenIds.Home);
  return (
    <View style={Helpers.fill}>
      <AppText textKey={STRINGS.another.description} />
      <AppButton title="Go Back" onPress={goBack} />
    </View>
  );
};

export default AnotherScreen;
