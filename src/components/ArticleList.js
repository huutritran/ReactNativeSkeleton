import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import ScreenIds from '../screens/ScreenIds';
import {useTopHeadlines} from '../services/TristanNewsService';
import {ApplicationStyles} from '../theme';
import {useMount} from '../utils/commonHooks';
import ArticleItem from './ArticleItem';
import DateTimeUtil from '../utils/DateTimeUtil';

const ArticleList = ({initialPage = 1, category}) => {
  const [page, setPage] = useState(initialPage);
  const [refresh, setRefresh] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const {fetchData, isLoading, articles, error} = useTopHeadlines(category);

  useMount(async () => {
    await fetchData(initialPage);
  });

  useEffect(() => {
    if (loadMore) {
      setData([...data, ...articles]);
      setPage(page + 1);
    } else {
      setData(articles);
      setPage(initialPage);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [articles]);

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

  const onPress = (item) => {
    navigation?.navigate(ScreenIds.DetailArticle, {url: item.url});
  };

  const renderItem = ({item}) => {
    const {publishedAt} = item;
    const date = DateTimeUtil.toRelativeTime(publishedAt);
    return (
      <ArticleItem {...item} onPress={() => onPress(item)} publishedAt={date} />
    );
  };

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
