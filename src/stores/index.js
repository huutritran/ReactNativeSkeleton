import {combineReducers} from 'redux';
import configureStore from './CreateStore';
import {reducer as AppSettingsReducer} from './AppSettings/Reducer';

const rootReducer = combineReducers({
  appSettings: AppSettingsReducer,
});

export const {store, persistor} = configureStore(rootReducer);
