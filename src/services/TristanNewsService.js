import restFulApi from '../network/restfulApi';
import Configs from '../config';
import LogService from './LogService';

const changeRequest = (requestConfig) => {
  const configs = {
    ...requestConfig,
    url: `${requestConfig.url}&apiKey=${Configs.API_KEY}`,
  };
  LogService.log('Change config', Configs);
  return configs;
};

const middlewares = {
  changeRequest,
};

const restfulApiInstance = restFulApi(
  {
    baseURL: Configs.BASE_URL,
  },
  middlewares,
);

const getTopHeadlines = (page) =>
  restfulApiInstance.get(`/v2/top-headlines?country=us&page=${page}`);

export default {
  getTopHeadlines,
};
