//@flow

import type {QuoteItem} from '../store/types';

export type Response = {
  status: boolean,
  errorMessage: string,
  data: Array<QuoteItem>
};
