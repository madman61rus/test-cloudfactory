//@flow

export type QuoteItem = {
  id: number,
  last: string,
  lowestAsk: string,
  highestBid: string,
  percentChange: string,
  baseVolume: string,
  quoteVolume: string,
  isFrozen: string,
  high24hr: string,
  low24hr: string
};

export type PendingStatus = 'pending' | 'done' | 'error';
