//@flow

import React, {Component} from 'react';
import {Provider} from 'mobx-react/native';
import AppNavigator from './navigation/navigator';
import QuotesStore from './store/QuotesStore';
import NavigationService from './navigation/NavigationService';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider quotesStore={QuotesStore}>
        <AppNavigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
