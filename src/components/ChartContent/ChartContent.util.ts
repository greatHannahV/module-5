import { Meta } from "../../services/data.types";

export const TITLES: Record<string, string> = {
  regularMarketPrice: "Current Price",
  regularMarketChange: "Price Change Amount",
  regularMarketChangePercent: "Price Change Rate",
  regularMarketTime: "Date",
};

export function getDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleString();
}
export function priceChangeRate(data: Meta): number {
  if (
    data.regularMarketPrice === undefined ||
    data.previousClose === undefined
  ) {
    throw new Error(
      "Missing data: regularMarketPrice or previousClose is undefined"
    );
  }

  const changeRate =
    ((data.regularMarketPrice - data.previousClose) / data.previousClose) * 100;
  return +changeRate.toFixed(2);
}

export function getPriceChageAmout(data: Meta): number | string {
  if (
    data.regularMarketPrice === undefined ||
    data.previousClose === undefined
  ) {
    throw new Error(
      "Missing data: regularMarketPrice or previousClose is undefined"
    );
  }
  return (data.regularMarketPrice - data.previousClose).toFixed(2);
}

export function getPriceChangeRate(data: Meta): number | string {
  return priceChangeRate(data) + "%";
}
