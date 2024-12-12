import { expect, it, describe, beforeAll, afterEach, afterAll } from "vitest";
import { fetchStockDetails, fetchStockTicker } from "./getData";
import "@testing-library/jest-dom";
import { server } from "./__mock__/browser";
import { http, HttpResponse } from "msw";

describe("Test API calls using MSW", () => {
  beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should fetch trending symbols", async () => {
    const response = await fetchStockTicker("AAPL");

    expect(response).toBeDefined();
    expect(response?.processedData.length).toBeGreaterThan(0);
    expect(response?.chartData.meta.symbol).toBe("AAPL");
  });

  it("should fetch stock details for the ticker", async () => {
    const stockDetails = await fetchStockDetails(["APPL"]);

    expect(stockDetails).toBeDefined();
    expect(stockDetails[0]?.symbol).toBe("APPL");
  });

  it("should handle Unauthorized (401) error", async () => {
    server.use(
      http.get("https://yfapi.net/v6/finance/quote?symbols=appl", () => {
        return HttpResponse.json(
          { message: "Request failed with status code 401" },
          { status: 401 }
        );
      })
    );

    try {
      await fetchStockDetails(["APPL"]);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe("Request failed with status code 401");
    }
  });

  it("should handle 'Request failed with status code 404' error", async () => {
    server.use(
      http.get("https://yfapi.net/v6/finance/quote?symbols=appl", () => {
        return HttpResponse.json(
          { message: "Request failed with status code 404" },
          { status: 404 }
        );
      })
    );

    try {
      await fetchStockDetails(["APPL"]);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe("Request failed with status code 404");
    }
  });

  it("should handle 'Request failed with status code 400' error", async () => {
    server.use(
      http.get("https://yfapi.net/v6/finance/quote?symbols=appl", () => {
        return HttpResponse.json(
          { message: "Request failed with status code 400" },
          { status: 400 }
        );
      })
    );

    try {
      await fetchStockDetails(["APPL"]);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe("Request failed with status code 400");
    }
  });

  it("should handle server error (500)", async () => {
    server.use(
      http.get("https://yfapi.net/v6/finance/quote?symbols=appl", () => {
        return HttpResponse.json(
          { message: "Request failed with status code 500" },
          { status: 500 }
        );
      })
    );

    try {
      await fetchStockDetails(["APPL"]);
    } catch (error) {
      expect(error).toBeDefined();
      expect(error.message).toBe("Request failed with status code 500");
    }
  });
});
