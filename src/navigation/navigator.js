import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import {AboutScreen, QuotesScreen} from '../modules';

const AppNavigator = createDrawerNavigator({
  Quotes: QuotesScreen,
  About: AboutScreen
});

export default createAppContainer(AppNavigator);
