import { expect, it } from "vitest";
import { CandleData } from "../pages/Chart/Chart.types";
import { calculateHeikinAshi } from "./calculateHiekinAshiData";
import "@testing-library/jest-dom";

const data: CandleData[] = [
  {
    close: 5.679999828338623,
    high: 5.679999828338623,
    id: "1733409065.6099",
    low: 5.591700077056885,
    open: 5.609899997711182,
    timestamp: 1733409060,
    volume: 223965,
  },
];
it("should correctly calculate Heikin-Ashi values", () => {
  const result = calculateHeikinAshi(data);
  const expectedHeikinAshiData = [
    {
      close: 5.679999828338623,
      hi: 5.679999828338623,
      high: 5.679999828338623,
      id: "1733409065.6099",
      lo: 5.591700077056885,
      low: 5.591700077056885,
      open: 5.609899997711182,
      timestamp: 1733409060,
      volume: 223965,
    },
  ];
  expect(result).toEqual(expectedHeikinAshiData);
});
