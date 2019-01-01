//@flow
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {TopNavigator, GradientWrapper} from '../../components';
import {QuoteContainer} from './components';
import {observer, inject} from 'mobx-react';
import {toJS} from 'mobx';
import type {Props} from './types';

class QuotesScreen extends Component<Props> {
  componentDidMount(): void {
    this.props.quotesStore.fetchQuotes();
    this.props.navigation.addListener('willBlur', () => clearInterval(interval));
    const interval = setInterval(() => this.props.quotesStore.fetchQuotes(), 10000);
  }

  render() {
    return (
      <GradientWrapper>
        <TopNavigator
          titleText={'Tickers'}
          onLeftIconPress={() => this.props.navigation.openDrawer()}
          onRightIconPress={() => this.props.navigation.openDrawer()}
          animated={this.props.quotesStore.state === 'pending'}
        />
        <FlatList
          renderItem={(item) => <QuoteContainer item={item} />}
          data={Object.entries(toJS(this.props.quotesStore.getQuotes))}
          keyExtractor={item => item[0]}
        />
      </GradientWrapper>
    );
  }
}

export default inject('quotesStore')(observer(QuotesScreen));
