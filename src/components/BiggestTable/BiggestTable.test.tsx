import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BiggestTable from "./BiggestTable";
import mockStocks from "../../services/__mock__/mockStocks.json";
import "@testing-library/jest-dom";

describe("Biggest gainers and losers are shown correctly", () => {
  it("Biggest gainers are shown correctly", () => {
    render(
      <BiggestTable
        type="gainers"
        isLoading={false}
        uniqueStocks={mockStocks}
      />
    );
    const textElement = screen.getByText(/Biggest Gainers/i);
    expect(textElement).toBeInTheDocument();
  });
  it("Biggest losers are shown correctly", () => {
    render(
      <BiggestTable type="losers" isLoading={false} uniqueStocks={mockStocks} />
    );
    const textElement = screen.getByText(/Biggest losers/i);
    expect(textElement).toBeInTheDocument();
  });
});
