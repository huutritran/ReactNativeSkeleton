import React from 'react';
import {useLanguages} from '../stores/AppSettings';

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

export default withTranslation;
