import { describe, it, expect } from "vitest";
import { Meta } from "../services/data.types";
import { updateMainTable } from "./updateMainTable";

describe("updateMainTable", () => {
  const tableHeaders: Record<string, string> = {
    symbol: "Symbol",
    shortName: "Short Name",
    regularMarketChange: "Change",
    regularMarketChangePercent: "Change Percent",
  };

  const mockStockData: Meta[] = [
    {
      symbol: "AAPL",
      shortName: "Apple Inc.",
      regularMarketChange: 1.23,
      regularMarketChangePercent: 2.34,
    },
    {
      symbol: "MSFT",
      shortName: "Microsoft Corp.",
      regularMarketChange: -0.45,
      regularMarketChangePercent: -0.56,
    },
  ];

  it("should return the formatted table data with specified headers", () => {
    const result = updateMainTable(mockStockData, tableHeaders);

    expect(result).toHaveLength(2);
    expect(result[0].symbol).toBe("AAPL");
    expect(result[0].shortName).toBe("Apple Inc.");
    expect(result[0].regularMarketChange).toBe(1.23);
    expect(result[0].regularMarketChangePercent).toBe(2.34);

    expect(result[1].symbol).toBe("MSFT");
    expect(result[1].shortName).toBe("Microsoft Corp.");
    expect(result[1].regularMarketChange).toBe(-0.45);
    expect(result[1].regularMarketChangePercent).toBe(-0.56);
  });

  it("should handle an empty stock data array", () => {
    const result = updateMainTable([], tableHeaders);

    expect(result).toHaveLength(0);
  });

  it("should return data with only specified headers", () => {
    const partialHeaders: Record<string, string> = {
      symbol: "Symbol",
      shortName: "Short Name",
    };

    const result = updateMainTable(mockStockData, partialHeaders);

    expect(result).toHaveLength(2);
    expect(result[0].symbol).toBe("AAPL");
    expect(result[0].shortName).toBe("Apple Inc.");
    expect(result[1].symbol).toBe("MSFT");
    expect(result[1].shortName).toBe("Microsoft Corp.");
  });

  it("should handle non-existent headers gracefully", () => {
    const invalidHeaders: Record<string, string> = {
      nonExistentField: "Non Existent Field",
    };

    const result = updateMainTable(mockStockData, invalidHeaders);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual(mockStockData[0]);
    expect(result[1]).toEqual(mockStockData[1]);
  });

  it("should handle mixed valid and invalid headers", () => {
    const mixedHeaders: Record<string, string> = {
      symbol: "Symbol",
      nonExistentField: "Non Existent Field",
    };

    const result = updateMainTable(mockStockData, mixedHeaders);

    expect(result).toHaveLength(2);
    expect(result[0].symbol).toBe("AAPL");
    expect(result[0]).not.toHaveProperty("nonExistentField");

    expect(result[1].symbol).toBe("MSFT");
    expect(result[1]).not.toHaveProperty("nonExistentField");
  });
});
