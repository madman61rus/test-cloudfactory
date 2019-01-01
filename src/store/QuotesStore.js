//@flow
import {observable, action, computed, decorate} from 'mobx';
import type {PendingStatus} from './types';
import {fetchTickets} from '../api/fetchTickets';

export class QuotesStore {
  quotes: Object = {};
  state: PendingStatus = 'done';
  errorMessage: string = '';

  fetchQuotes() {
    this.quotes = [];
    this.state = 'pending';
    this.errorMessage = '';
    fetchTickets().then(data => {
      this.quotes = data.data;
      this.state = data.status ? 'done' : 'error';
      this.errorMessage = data.errorMessage;
    });
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
}

decorate(QuotesStore, {
  quotes: observable,
  state: observable,
  errorMessage: observable,
  fetchQuotes: action,
  getState: computed,
  getErrorMessage: computed,
  getQuotes: computed
});

export default new QuotesStore();
