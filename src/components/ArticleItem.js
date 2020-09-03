import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {Helpers, Metrics, Colors, Fonts} from '../theme';

const ImageSize = 100;

const styles = StyleSheet.create({
  image: {
    height: ImageSize,
    aspectRatio: 1,
    backgroundColor: Colors.grey,
  },
  title: {
    ...Fonts.normal,
    fontWeight: 'bold',
  },
  description: {
    ...Fonts.medium,
    ...Helpers.fill,
    ...Metrics.smallTopMargin,
  },
  date: {
    ...Fonts.small,
    ...Helpers.textRight,
    ...Metrics.smallHorizontalMargin,
    ...Metrics.smallTopMargin,
  },
});

const ArticleItem = ({
  title,
  description,
  publishedAt,
  urlToImage,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Helpers.selfStretch,
        Metrics.smallHorizontalMargin,
        Metrics.smallVerticalMargin,
      ]}>
      <View style={Helpers.row}>
        <Image style={styles.image} source={{uri: urlToImage}} />
        <View style={[Metrics.smallHorizontalMargin, Helpers.fill]}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={4} style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
      <Text style={styles.date}>{publishedAt}</Text>
    </TouchableOpacity>
  );
};

export default ArticleItem;
