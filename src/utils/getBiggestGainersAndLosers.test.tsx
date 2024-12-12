import { describe, it, expect } from "vitest";

import mockStocks from "../services/__mock__/mockStocks.json";
import "@testing-library/jest-dom";
import { getBiggestGainersAndLosers } from "./getBiggestGainersAndLosers";

describe("Biggest gainers and losers are ordered correctly", () => {
  it("should correctly calculate biggest gainers", () => {
    const { biggestGainers } = getBiggestGainersAndLosers(mockStocks);

    expect(biggestGainers).toHaveLength(5);

    expect(biggestGainers[0].company.symbol).toBe("AMZN");
    expect(biggestGainers[1].company.symbol).toBe("GOOG");
  });

  it("should correctly calculate biggest losers", () => {
    const { biggestLosers } = getBiggestGainersAndLosers(mockStocks);

    expect(biggestLosers).toHaveLength(5);

    expect(biggestLosers[0].company.symbol).toBe("TSM");
    expect(biggestLosers[1].company.symbol).toBe("WMT");
  });

  it("should handle an empty array", () => {
    const { biggestGainers, biggestLosers } = getBiggestGainersAndLosers([]);

    expect(biggestGainers).toHaveLength(0);
    expect(biggestLosers).toHaveLength(0);
  });

  it("should return the correct structure", () => {
    const result = getBiggestGainersAndLosers(mockStocks);

    expect(result).toHaveProperty("biggestGainers");
    expect(result).toHaveProperty("biggestLosers");
    expect(Array.isArray(result.biggestGainers)).toBe(true);
    expect(Array.isArray(result.biggestLosers)).toBe(true);
  });

  it("should handle stocks with no changes correctly", () => {
    const noChangeStocks = [
      {
        symbol: "AAPL",
        shortName: "Apple Inc.",
        regularMarketChange: 0,
        regularMarketChangePercent: 0,
      },
      {
        symbol: "MSFT",
        shortName: "Microsoft Corporation",
        regularMarketChange: 0,
        regularMarketChangePercent: 0,
      },
    ];

    const { biggestGainers, biggestLosers } =
      getBiggestGainersAndLosers(noChangeStocks);

    expect(biggestGainers).toHaveLength(2);
    expect(biggestLosers).toHaveLength(0);
  });

  it("should handle an array with only one item", () => {
    const oneStock = [
      {
        symbol: "CRM",
        shortName: "Salesforce, Inc.",
        regularMarketChange: 31.42,
        regularMarketChangePercent: 9.48,
      },
    ];

    const { biggestGainers, biggestLosers } =
      getBiggestGainersAndLosers(oneStock);

    expect(biggestGainers).toHaveLength(1);
    expect(biggestGainers[0].company.symbol).toBe("CRM");
    expect(biggestLosers).toHaveLength(0);
  });
});
