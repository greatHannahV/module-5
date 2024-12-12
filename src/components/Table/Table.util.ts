import { Meta } from "../../services/data.types";
import { isNotNullable } from "../../utils/helpers.util";
import { TableHeaderProps } from "./Table.types";

export const getTextColorForTable = (
  key: string,
  value?: string | number
): string => {
  if (!isNotNullable(value)) {
    return "";
  }
  const hasMarketChangeProperties = [
    "regularMarketChange",
    "regularMarketChangePercent",
  ].includes(key);

  if (isNotNullable(value) && hasMarketChangeProperties) {
    const floatValue = typeof value === "string" ? parseFloat(value) : value;

    return floatValue >= 0 ? "green" : "red";
  }
  return "";
};

export const tableHeaders: TableHeaderProps["tableHeaders"] = {
  shortName: "Name",
  regularMarketPreviousClose: "Previous Close",
  regularMarketPrice: "Last",
  regularMarketChangePercent: "%",
  regularMarketChange: "+/-",
  regularMarketTime: "Trade Time",
  symbol: "symbol",
};

export const getValue = (key: string, stock: Meta) => {
  if (key === "regularMarketTime") {
    return new Date((stock[key] as number) * 1000).toLocaleString();
  }

  const value = stock[key];

  if (typeof value === "number") {
    return value.toFixed(2);
  }

  if (key === "shortName") {
    return (
      stock.shortName || stock.longName || stock.displayName || stock.symbol
    );
  }

  return value || "N/A";
};
