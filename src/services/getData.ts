import axios from "axios";
import {
  Data,
  isChartData,
  isFinanceResult,
  isString,
  Stock,
} from "./dataGuards";

const axiosInstance = axios.create({
  baseURL: "https://yfapi.net/",
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-KEY": import.meta.env.VITE_BACKEND_API_KEY,
  },
});

export async function fetchFromApi(url: string, version: number, params = {}) {
  try {
    const response = await axiosInstance.request({
      url: `/v${version}/finance/${url}`,
      params: params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchTrendingSymbols(region: string): Promise<string[]> {
  const url = `trending/${region}`;
  const data: Data = await fetchFromApi(url, 1);
  const financeResult = data?.finance?.result;

  if (!financeResult || !isFinanceResult(financeResult)) {
    console.error("Invalid data format for financeResult", financeResult);
    return [];
  }

  return financeResult.flatMap((stock: Stock) => {
    return stock.quotes.map((quote) => quote.symbol).filter(isString);
  });
}

export async function fetchStockDetails(symbols: string[]) {
  const url = "quote";
  const params = {
    symbols: symbols.join(","),
    modules: "defaultKeyStatistics,assetProfile",
  };
  const data = await fetchFromApi(url, 6, params);
  return data.quoteResponse?.result || [];
}

export async function getData() {
  try {
    const symbols = await fetchTrendingSymbols("US");
    const stockDetails = await fetchStockDetails(symbols);
    return stockDetails;
  } catch (error) {
    console.error("Error in getData function:", error);
  }
}

export async function fetchStockTicker(ticker?: string) {
  const url = `chart/${ticker}`;

  const data: Data = await fetchFromApi(url, 8);

  const chartData = data.chart?.result?.[0];

  if (!chartData || !isChartData(chartData)) {
    return;
  }

  const timestamps = chartData?.timestamp;
  const indicators = chartData?.indicators;

  if (!timestamps || !indicators) {
    throw new Error("Missing required data for the given ticker");
  }

  const processedData = timestamps.map((timestamp: number, index: number) => {
    const quote = indicators.quote[0];

    return {
      timestamp,
      close: quote.close[index],
      low: quote.low[index],
      open: quote.open[index],
      volume: quote.volume[index],
      high: quote.high[index],
    };
  });

  return { processedData, chartData };
}
