import React, {useMemo} from 'react';
import {Text, Button} from 'react-native';
import {useSelector} from 'react-redux';
import {getAppLanguage} from '../stores/AppSettings/Selectors';
import {translate} from '../assets/localize';
import ArticleItem from './ArticleItem';
import ArticleList from './ArticleList';

function useLanguages(key) {
  const language = useSelector(getAppLanguage);
  const translated = useMemo(() => {
    return translate(key, {locale: language});
  }, [language, key]);
  return translated;
}

function withTranslation(Component, textField) {
  return function WithTranslationComponent({textKey, ...otherProps}) {
    const translated = useLanguages(textKey);
    if (textKey && textField) {
      const newProps = {
        [textField]: translated,
        ...otherProps,
      };
      return <Component {...newProps} />;
    }
    return <Component {...otherProps} />;
  };
}

const AppText = withTranslation(Text, 'children');
const AppButton = withTranslation(Button, 'title');
module.exports = {
  AppText,
  AppButton,
  ArticleItem,
  ArticleList,
};
