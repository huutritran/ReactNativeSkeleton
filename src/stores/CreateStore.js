import {applyMiddleware, compose, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['appSettings'], //will be persisted
};

export default (rootReducer) => {
  const middleware = [];
  const enhancers = [];

  // Connect the thunk to the redux store
  middleware.push(thunk);

  enhancers.push(applyMiddleware(...middleware));

  // Redux persist
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(persistedReducer, compose(...enhancers));
  const persistor = persistStore(store);
  return {store, persistor};
};
