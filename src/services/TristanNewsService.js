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

const getTopHeadlines = ({page, category}) =>
  restfulApiInstance.get(`/v2/top-headlines?page=${page}`, {
    params: {
      country: 'us',
      category,
    },
  });

export const useTopHeadlines = (category) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (page) => {
    LogService.log('-----Fetch Data----');
    setLoading(true);
    setError(null);
    try {
      const response = await getTopHeadlines({page, category});
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

  return {fetchData, isLoading, articles, error};
};

export default {
  getTopHeadlines,
};
