import { Company } from "../../utils/getBiggestGainersAndLosers";

export type TableType = "gainers" | "losers";

export interface BiggestTableProps {
  type: TableType;
  isLoading: boolean;
  uniqueStocks: Company[];
}
