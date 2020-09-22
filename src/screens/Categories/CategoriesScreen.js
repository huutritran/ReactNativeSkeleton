import React from 'react';
import {View} from 'react-native';
import {Helpers} from '../../theme';
import {CategoryGrid} from '../../components';
import {useNavigation} from '@react-navigation/native';
import ScreenIds from '../ScreenIds';
import {useSelector} from 'react-redux';
import {getAppLanguage} from '../../stores/AppSettings/Selectors';
import {translate} from '../../assets/localize';

const CategoriesScreen = () => {
  const language = useSelector(getAppLanguage);
  const navigation = useNavigation();
  const onPressItem = ({name}) => {
    const category = translate(name, {locale: language});
    navigation.navigate(ScreenIds.CategoriesArticles, {title: category, name});
  };
  return (
    <View style={[Helpers.fill, Helpers.center]}>
      <CategoryGrid onPressItem={onPressItem} />
    </View>
  );
};

export default CategoriesScreen;
