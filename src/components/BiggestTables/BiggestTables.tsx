import BiggestTable from "../BiggestTable/BiggestTable";
import { BiggestTablesProps } from "./BiggestTables.types";

const BiggestTables: React.FC<BiggestTablesProps> = ({ isLoading, stocks }) => {
  return (
    <div>
      <BiggestTable
        isLoading={isLoading}
        type="gainers"
        uniqueStocks={stocks}
      />
      <BiggestTable isLoading={isLoading} type="losers" uniqueStocks={stocks} />
    </div>
  );
};
export default BiggestTables;
