import { getBiggestGainersAndLosers } from "../../utils/getBiggestGainersAndLosers.ts";
import SkeletonBiggestTables from "../skeletons/SkeletonBiggestTable/SkeletonBiggestTables";
import {
  ChangeStyled,
  ChangePercentStyled,
  CompanyRowStyled,
  ShortNameStyled,
  SymbolStyled,
  TableContainerStyled,
} from "./BiggestTable.styles";
import { memo, useMemo } from "react";
import { getOrElse } from "../../utils/helpers.util.ts";
import { BiggestTableProps, TableType } from "./BiggestTable.types.ts";

const TITLES_MAP: Record<TableType, string> = {
  gainers: "Biggest Gainers",
  losers: "Biggest Losers",
};

const BiggestTable: React.FC<BiggestTableProps> = ({
  type,
  isLoading,
  uniqueStocks,
}) => {
  const { biggestGainers, biggestLosers } = useMemo(() => {
    return getBiggestGainersAndLosers(uniqueStocks);
  }, [uniqueStocks]);

  const companies = type === "gainers" ? biggestGainers : biggestLosers;
  const title = TITLES_MAP[type];

  if (isLoading) {
    return (
      <div>
        <SkeletonBiggestTables />
      </div>
    );
  }
  return (
    <TableContainerStyled>
      <h2>{title}</h2>
      {companies.map((company, index) => {
        const {
          symbol,
          regularMarketChangePercent,
          regularMarketChange,
          shortName,
        } = company.company || {};

        const changePercent = parseFloat(
          getOrElse(regularMarketChangePercent, 0).toFixed(2)
        );
        const change = parseFloat(getOrElse(regularMarketChange, 0).toFixed(2));
        const key = `${symbol}-${index}`;
        const symbolRender = symbol?.includes("^") ? symbol.slice(1) : symbol;
        const changePercentRender = change.toFixed(2).replace(/[+$-]/g, "");

        return (
          <CompanyRowStyled key={key}>
            <SymbolStyled>{symbolRender}</SymbolStyled>
            <ChangePercentStyled $changePercent={changePercent}>
              {changePercent}
            </ChangePercentStyled>
            <ShortNameStyled>{shortName}</ShortNameStyled>
            <ChangeStyled>{changePercentRender}</ChangeStyled>
          </CompanyRowStyled>
        );
      })}
    </TableContainerStyled>
  );
};
export default memo(BiggestTable);
