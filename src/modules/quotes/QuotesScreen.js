//@flow
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {TopNavigator, GradientWrapper, Alert} from '../../components';
import {QuoteContainer} from './components';
import {observer, inject} from 'mobx-react';
import {styles} from './styles';
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
        {this.props.quotesStore.state === 'error' && (
          <Alert
            text={this.props.quotesStore.getErrorMessage}
            styleContainer={styles.alertContainer}
          />
        )}
        <FlatList
          renderItem={item => <QuoteContainer item={item} />}
          data={Object.entries(toJS(this.props.quotesStore.getQuotes))}
          keyExtractor={item => item[0]}
        />
      </GradientWrapper>
    );
  }
}

export default inject('quotesStore')(observer(QuotesScreen));
