import * as ActionTypes from './ActionTypes';

export const initialState = {
  language: 'vn',
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ActionTypes.UPDATE:
      return {...state, ...action.payload};
    case ActionTypes.RESET:
      return initialState;
    default:
      return state;
  }
};
