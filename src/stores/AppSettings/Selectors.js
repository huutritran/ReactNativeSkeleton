export const get = (state) => state.appSettings;

export const getAppLanguage = (state) => {
  const settings = get(state);
  return settings.language;
};
