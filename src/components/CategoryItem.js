import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {ICONS} from '../assets/icons';
import CustomIcon from '../assets/icons/CustomIcon';
import {AppText} from '../components/index';
import {Colors, Fonts, Helpers, Metrics} from '../theme';

const IconSize = 48;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    aspectRatio: 1,
    backgroundColor: Colors.primary,
    ...Helpers.center,
  },
  name: {
    ...Fonts.normal,
    ...Metrics.smallTopMargin,
    fontWeight: 'bold',
    color: Colors.white,
  },
});

const CategoryItem = ({
  name,
  onPress,
  iconName = ICONS.GENERAL,
  backgroundColor = Colors.primary,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {backgroundColor}]}>
      <CustomIcon name={iconName} size={IconSize} color={Colors.white} />
      <AppText textKey={name} style={styles.name} />
    </TouchableOpacity>
  );
};

export default CategoryItem;
