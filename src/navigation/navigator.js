import React from 'react';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import {AboutScreen, QuotesScreen} from '../modules';
import {QuotesStore} from '../store/QuotesStore';

const AppNavigator = createDrawerNavigator({
  Quotes: {screen: () => <QuotesScreen />},
  About: AboutScreen
});

export default createAppContainer(AppNavigator);
