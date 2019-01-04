import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import {AboutScreen, QuotesScreen} from '../modules';
import {Drawer} from '../components';

const AppNavigator = createDrawerNavigator(
  {
    Quotes: QuotesScreen,
    About: AboutScreen
  },
  {
    contentComponent: Drawer,
    headerMode: 'none',
    transparentCard: true
  }
);

export default createAppContainer(AppNavigator);
