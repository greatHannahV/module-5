import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import ChartContent from "./ChartContent";
import "@testing-library/jest-dom";

export const mockAppleChartData = {
  chartData: {
    indicators: {
      quote: [
        {
          high: Array(391)
            .fill(0)
            .map((_, index) => 175 + index * 0.2),
          close: Array(391)
            .fill(0)
            .map((_, index) => 170 + index * 0.1),
          low: Array(391)
            .fill(0)
            .map((_, index) => 165 + index * 0.1),
          open: Array(391)
            .fill(0)
            .map((_, index) => 168 + index * 0.1),
          volume: Array(391)
            .fill(0)
            .map((_, index) => 5000000 + index * 20000),
        },
      ],
    },
    meta: {
      currency: "USD",
      symbol: "AAPL",
      exchangeName: "NASDAQ",
      fullExchangeName: "NASDAQ Stock Market",
      instrumentType: "EQUITY",
      shortName: "Apple Inc.",
      regularMarketPrice: 175,
      previousClose: 170,
    },
    timestamp: Array(391)
      .fill(0)
      .map((_, index) => 1733322600 + index * 60),
  },
  processedData: Array(391)
    .fill(0)
    .map((_, index) => ({
      timestamp: 1733322600 + index * 60,
      close: 170 + index * 0.1,
      low: 165 + index * 0.1,
      open: 168 + index * 0.1,
      volume: 5000000 + index * 20000,
      high: 175 + index * 0.2,
    })),
};

it("ChartContent component renders correctly", () => {
  render(<ChartContent selectedCompany={mockAppleChartData} />);
  const shortName = screen.getByText("Apple Inc.");
  expect(shortName).toBeInTheDocument();
});
