import i18n from 'i18n-js';
import en from './en.json';
import vn from './vn.json';

i18n.fallbacks = true;

i18n.translations = {
  en,
  vn,
};

export const LANGUAGES = {
  EN: 'en',
  VN: 'vn',
};

export function translate(name, params = {defaultValue: name}) {
  return i18n.t(name, params);
}
