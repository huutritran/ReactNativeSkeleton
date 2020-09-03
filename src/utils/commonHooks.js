import {useEffect} from 'react';

export const useMount = (func) => {
  return useEffect(() => {
    func && func();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
