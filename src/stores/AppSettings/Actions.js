import * as ActionTypes from './ActionTypes';

export const update = (appSettings) => ({
  type: ActionTypes.UPDATE,
  payload: appSettings,
});

export const reset = () => ({
  type: ActionTypes.RESET,
  payload: null,
});
