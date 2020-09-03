import React, {useState, useEffect} from 'react';
import {FlatList, View} from 'react-native';
import {ApplicationStyles} from '../theme';
import ArticleItem from './ArticleItem';
import TristanNewsService from '../services/TristanNewsService';

const ArticleList = ({initialPage = 1}) => {
  const [page, setPage] = useState(initialPage);
  const [refresh, setRefresh] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    TristanNewsService.getTopHeadlines(page)
      .then((response) => {
        if (response.data && response.data.articles) {
          const articles = refresh
            ? response.data.articles
            : [...data, ...response.data.articles];
          setData(articles);
        }
        setLoadMore(false);
        setRefresh(false);
      })
      .catch((err) => {
        alert(err.message);
        setRefresh(false);
        setLoadMore(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handleLoadMore = () => {
    if (!refresh && !loadMore && data.length >= 20) {
      setLoadMore(true);
      setPage(page + 1);
    }
  };

  const onRefresh = () => {
    setRefresh(true);
    setPage(initialPage);
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
