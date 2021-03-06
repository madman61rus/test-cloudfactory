//@flow
import {observable, action, computed, decorate, values, keys} from 'mobx';
import type {PendingStatus} from './types';
import {fetchTickets} from '../api/fetchTickets';

export class QuotesStore {
  quotes: Object = {};
  state: PendingStatus = 'done';
  errorMessage: string = '';

  fetchQuotes() {
    this.state = 'pending';
    this.errorMessage = '';
    //timeout for animate pending
    setTimeout(
      () =>
        fetchTickets().then(data => {
          this.quotes = data.data;
          this.state = data.status ? 'done' : 'error';
          this.errorMessage = data.errorMessage;
        }),
      3000
    );
  }

  get getState() {
    return this.state;
  }

  get getErrorMessage() {
    return this.errorMessage;
  }

  get getQuotes() {
    return this.quotes;
  }

  get getKeys() {
    return keys(this.quotes);
  }
}

decorate(QuotesStore, {
  quotes: observable,
  state: observable,
  errorMessage: observable,
  fetchQuotes: action,
  getState: computed,
  getErrorMessage: computed,
  getQuotes: computed,
  getKeys: computed
});

export default new QuotesStore();
