//@flow
import axios from 'axios';
import {urls} from '../settings/urls';
import type {Response} from './types';

export async function fetchTickets() {
  const fullUrl = `${urls.baseUrl}${urls.tickers}`;

  const data: Response = axios
    .get(fullUrl)
    .then(response => ({
      status: !response.data.error,
      errorMessage: response.data.error || '',
      data: response.data.error ? [] : response.data
    }))
    .catch(error => ({
      status: false,
      errorMessage: error.message,
      data: []
    }));

  return await data;
}
