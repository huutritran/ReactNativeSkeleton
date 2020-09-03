import React, {useMemo} from 'react';
import {useSelector} from 'react-redux';
import {getAppLanguage} from '../stores/AppSettings/Selectors';
import {translate} from '../assets/localize';
import ArticleItem from './ArticleItem';
import ArticleList from './ArticleList';
import CategoryItem from './CategoryItem';
import CategoryGrid from './CategoryGrid';
import AppText from './AppText';
import AppButton from './AppButton';

module.exports = {
  AppText,
  AppButton,
  ArticleItem,
  ArticleList,
  CategoryItem,
  CategoryGrid,
};
