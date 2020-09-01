import {useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {View} from 'react-native';
import {STRINGS} from '../../assets/localize/String';
import {AppButton, AppText} from '../../components';
import {store} from '../../stores';
import {setAppLanguage} from '../../stores/AppSettings';
import {Helpers} from '../../theme';
import ScreenIds from '../ScreenIds';
import {LANGUAGES} from '../../assets/localize';

const HomeScreen = () => {
  const navigation = useNavigation();
  const goToAnother = useCallback(() => {
    navigation.navigate(ScreenIds.Another);
  }, [navigation]);
  const changeToEng = () => {
    store.dispatch(setAppLanguage(LANGUAGES.EN));
  };
  const changeToVietnames = () => {
    store.dispatch(setAppLanguage(LANGUAGES.VN));
  };
  return (
    <View style={Helpers.fill}>
      <AppText textKey={STRINGS.home.description} />
      <AppButton
        textKey={STRINGS.home.btn_go_to_another}
        onPress={goToAnother}
      />
      <View style={Helpers.row}>
        <AppButton textKey={STRINGS.home.btn_en} onPress={changeToEng} />
        <AppButton textKey={STRINGS.home.btn_vn} onPress={changeToVietnames} />
      </View>
    </View>
  );
};

export default HomeScreen;
