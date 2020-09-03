import restFulApi from '../network/restfulApi';
// import Config from '../config';
import LogService from './LogService';
import Config from 'react-native-config';

const changeRequest = (requestConfig) => {
  const configs = {
    ...requestConfig,
    url: `${requestConfig.url}&apiKey=${Config.API_KEY}`,
  };
  LogService.log('Change config', Config);
  return configs;
};

const middlewares = {
  changeRequest,
};

const restfulApiInstance = restFulApi(
  {
    baseURL: Config.BASE_URL,
  },
  middlewares,
);

const getTopHeadlines = (page) =>
  restfulApiInstance.get(`/v2/top-headlines?country=us&page=${page}`);

export default {
  getTopHeadlines,
};
