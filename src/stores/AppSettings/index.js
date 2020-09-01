import * as actionCreators from './Actions';

export const setAppLanguage = (language) => {
  return actionCreators.update({language});
};

export const clearAppSettings = async () => {
  //update app settings
  return actionCreators.reset();
};
