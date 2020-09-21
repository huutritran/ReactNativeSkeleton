import React from 'react';
import {FlatGrid} from 'react-native-super-grid';
import {ICONS} from '../assets/icons';
import {STRINGS} from '../assets/localize/String';
import {Colors, Helpers} from '../theme';
import CategoryItem from './CategoryItem';

const CATEGORIES = [
  STRINGS.common.business,
  STRINGS.common.entertainment,
  STRINGS.common.general,
  STRINGS.common.health,
  STRINGS.common.sports,
  STRINGS.common.technology,
  STRINGS.common.science,
];

const COLORS = [
  Colors.pink,
  Colors.purple,
  Colors.blue,
  Colors.indigo,
  Colors.deepPurple,
  Colors.deepOrange,
  Colors.cyan,
];

const CATEGORIES_SPEC = CATEGORIES.map((value, index) => ({
  name: value,
  iconName: ICONS[value],
  backgroundColor: COLORS[index],
}));

const CategoryGrid = ({categories = CATEGORIES_SPEC, onPressItem}) => {
  const renderItem = ({item}) => {
    return (
      <CategoryItem
        {...item}
        onPress={() => onPressItem && onPressItem(item)}
      />
    );
  };

  return (
    <FlatGrid
      style={Helpers.selfStretch}
      keyExtractor={(item) => item.name}
      itemContainerStyle={Helpers.center}
      data={categories}
      renderItem={renderItem}
    />
  );
};

export default CategoryGrid;
