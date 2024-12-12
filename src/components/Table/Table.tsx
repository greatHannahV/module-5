import React, { memo, useMemo } from "react";
import { updateMainTable } from "../../utils/updateMainTable.ts";
import {
  HeaderStyled,
  MainTableContainerStyled,
  TableCellStyled,
  TableRowStyled,
} from "./Table.styles";
import TableHeader from "../TableHeader/TableHeader";
import SkeletonTable from "../skeletons/SkeletonTable/SkeletonTable.tsx";
import SkeletonMainTableHeader from "../skeletons/SkeletonMainTableHeader/SkeletonMainTableHeader.tsx";
import { TableProps } from "./Table.types.ts";
import { getTextColorForTable, getValue, tableHeaders } from "./Table.util.ts";

const Table: React.FC<TableProps> = ({ stocks, isLoading }) => {
  const formattedData = useMemo(() => {
    if (!Array.isArray(stocks) || !stocks.length) return [];
    return updateMainTable(stocks, tableHeaders);
  }, [stocks]);

  if (isLoading) {
    return (
      <>
        <SkeletonMainTableHeader />
        {Array.from({ length: 20 }).map((_, index) => (
          <SkeletonTable key={index} />
        ))}
      </>
    );
  }
  return (
    <MainTableContainerStyled>
      <HeaderStyled>Realtime Prices for Dow Jones stocks</HeaderStyled>
      <TableHeader tableHeaders={tableHeaders} />

      <div>
        {formattedData.map((stock, i) => (
          <TableRowStyled role="row" key={i}>
            {Object.keys(tableHeaders).map((key) => {
              if (key === "symbol") {
                return null;
              }
              const value = getValue(key, stock);

              return (
                <TableCellStyled
                  to={`/chart/${stock.symbol}`}
                  key={key}
                  $textColor={getTextColorForTable(key, value)}
                  $bold={key === "shortName"}
                  $first={key === "shortName"}
                  $last={key === "regularMarketChange"}
                >
                  {value}
                </TableCellStyled>
              );
            })}
          </TableRowStyled>
        ))}
      </div>
    </MainTableContainerStyled>
  );
};

export default memo(Table);
