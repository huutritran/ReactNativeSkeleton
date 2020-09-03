import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {ApplicationStyles} from '../theme';
import ArticleItem from './ArticleItem';

const fakeData = [
  {
    id: 1,
    title: 'Title 1',
    description: 'This is the description 1',
    date: '2017-12:13',
  },
  {
    id: 2,
    title: 'Title 2',
    description: 'This is the description 2',
    date: '2017-12:13',
  },
  {
    id: 3,
    title: 'Title 3',
    description: 'This is the description 3',
    date: '2017-12:13',
  },
  {
    id: 4,
    title: 'Title 4',
    description: 'This is the description 4',
    date: '2017-12:13',
  },
];

const ArticleList = ({}) => {
  const [refresh, setRefresh] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [data, setData] = useState(fakeData);

  const handleLoadMore = () => {};

  const onRefresh = () => {};

  const renderItem = ({item}) => {
    return <ArticleItem {...item} />;
  };

  const renderSeparator = () => {
    return <View style={ApplicationStyles.separator} />;
  };

  const keyExtractor = (item, _index) => item.id;

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
