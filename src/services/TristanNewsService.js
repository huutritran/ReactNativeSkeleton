import {useState} from 'react';
import Configs from '../config';
import restFulApi from '../network/restfulApi';
import LogService from './LogService';

const changeRequest = (requestConfig) => {
  const configs = {
    ...requestConfig,
    url: `${requestConfig.url}&apiKey=${Configs.API_KEY}`,
  };
  return configs;
};

const restfulApiInstance = restFulApi(
  {
    baseURL: Configs.BASE_URL,
  },
  {changeRequest},
);

const getTopHeadlines = (page) =>
  restfulApiInstance.get(`/v2/top-headlines?country=us&page=${page}`);

export const useTopHeadlines = () => {
  const [acticles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (page) => {
    LogService.log('-----Fetch Data----');
    setLoading(true);
    setError(null);
    try {
      const response = await getTopHeadlines(page);
      if (response.data && response.data.articles) {
        const tempArticles = response.data.articles ?? [];
        LogService.log('-----Fetch Data Success----', tempArticles.length);
        setArticles(tempArticles);
      }
      setLoading(false);
    } catch (err) {
      LogService.log('-----Fetch Data Error----', err);
      setError(err);
      setLoading(false);
    }
  };

  return {fetchData, isLoading, acticles, error};
};

export default {
  getTopHeadlines,
};
