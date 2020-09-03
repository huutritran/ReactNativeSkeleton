import Axios from 'axios';
const DEFAULT_TIMEOUT = 1000 * 3; // 3s

const changeRequestDefault = (config) => {
  return config;
};

const onRequestErrorDefault = (error) => {
  return Promise.reject(error);
};

const changeResponseDefault = (response) => {
  return response;
};

const onResponseErrorDefault = (error) => {
  return Promise.reject(error);
};

const restFulApi = (
  {baseURL, headers = {}, timeout = DEFAULT_TIMEOUT},
  {
    changeRequest = changeRequestDefault,
    onRequestError = onRequestErrorDefault,
    changeResponse = changeResponseDefault,
    onResponseError = onResponseErrorDefault,
  },
) => {
  const instance = Axios.create({baseURL, timeout, headers});

  if (changeRequest) {
    instance.interceptors.request.use(changeRequest, async (error) => {
      if (onRequestError) {
        return onRequestError(error);
      }
      return Promise.reject(error);
    });
  }

  if (changeResponse) {
    instance.interceptors.response.use(changeResponse, async (error) => {
      if (onResponseError) {
        return onResponseError(error);
      }
      return Promise.reject(error);
    });
  }
  return instance;
};

export default restFulApi;
