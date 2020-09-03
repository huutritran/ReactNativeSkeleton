import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Helpers, Metrics, Colors, Fonts} from '../theme';

const ImageSize = 100;

const styles = StyleSheet.create({
  image: {
    height: ImageSize,
    aspectRatio: 1,
    backgroundColor: Colors.primary,
  },
  title: {
    ...Fonts.normal,
    fontWeight: 'bold',
  },
  description: {
    ...Fonts.medium,
    ...Helpers.fill,
  },
  date: {
    ...Fonts.small,
    ...Helpers.textRight,
    ...Metrics.smallHorizontalMargin,
  },
});

const ArticleItem = ({title, description, date, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Helpers.selfStretch,
        Metrics.smallHorizontalMargin,
        Metrics.smallVerticalMargin,
      ]}>
      <View style={Helpers.row}>
        <View style={styles.image} />
        <View style={[Metrics.smallHorizontalMargin, Helpers.fill]}>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={4} style={styles.description}>
            {description}
          </Text>
        </View>
      </View>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

export default ArticleItem;
