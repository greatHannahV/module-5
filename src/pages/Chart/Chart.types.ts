export interface CandleData {
  timestamp: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  id: string;
}
export interface Candles {
  regularCandles: CandleData[];
  heikinAshi: CandleData[];
}
export interface BarTypes {
  line: string;
  bar: string;
  candle: string;
}
