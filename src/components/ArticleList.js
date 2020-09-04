import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useTopHeadlines} from '../services/TristanNewsService';
import {ApplicationStyles} from '../theme';
import ArticleItem from './ArticleItem';
import {useMount} from '../utils/commonHooks';

const ArticleList = ({initialPage = 1}) => {
  const [page, setPage] = useState(initialPage);
  const [refresh, setRefresh] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [data, setData] = useState([]);

  const {fetchData, isLoading, acticles, error} = useTopHeadlines();

  useMount(async () => {
    await fetchData();
  });

  useEffect(() => {
    if (loadMore) {
      setData([...data, ...acticles]);
      setPage(page + 1);
    } else {
      setData(acticles);
      setPage(initialPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acticles]);

  useEffect(() => {
    if (!isLoading) {
      setLoadMore(false);
      setRefresh(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (error) {
      setLoadMore(false);
      setRefresh(false);
    }
  }, [error]);

  const handleLoadMore = async () => {
    if (!isLoading && data.length >= 20) {
      setLoadMore(true);
      await fetchData(page + 1);
    }
  };

  const onRefresh = async () => {
    setRefresh(true);
    await fetchData(initialPage);
  };

  const renderItem = ({item}) => <ArticleItem {...item} />;

  const renderSeparator = () => {
    return <View style={ApplicationStyles.separator} />;
  };

  const keyExtractor = (item, index) => `${index}`;

  return (
    <FlatList
      refreshing={refresh}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.1}
      onRefresh={onRefresh}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

export default ArticleList;
