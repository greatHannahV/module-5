export interface PriceChangeRateParams {
  regularMarketPrice?: number;
  previousClose?: number;
}
export interface Meta extends PriceChangeRateParams {
  shortName?: string;
  regularMarketTime?: number;
  regularMarketChange?: number;
  regularMarketChangePercent?: number;
  regularMarketPreviousClose?: number;
  symbol: string;
  currency: string;
  exchangeName: string;
  fullExchangeName: string;
  instrumentType: string;
  [key: string]: string | number | undefined;
}
