import * as actionCreators from './Actions';
import {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {translate} from '../../assets/localize';
import {getAppLanguage} from './Selectors';

export const setAppLanguage = (language) => {
  return actionCreators.update({language});
};

export const clearAppSettings = async () => {
  //update app settings
  return actionCreators.reset();
};

export const useLanguages = (key) => {
  const language = useSelector(getAppLanguage);
  const translated = useMemo(() => {
    return translate(key, {locale: language});
  }, [language, key]);
  return translated;
};
