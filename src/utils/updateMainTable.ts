import { Meta } from "../services/data.types";

type TableHeaders = Record<string, string>;

export function updateMainTable(
  stockData: Meta[],
  tableHeaders: TableHeaders
): Meta[] {
  const formattedTableData = stockData.map((stock) => {
    const rowData: Meta = { ...stock };

    Object.keys(tableHeaders).forEach((key) => {
      if (key in stock) {
        rowData[key as keyof Meta] = stock[key as keyof Meta];
      }
    });

    return rowData;
  });

  return formattedTableData;
}
