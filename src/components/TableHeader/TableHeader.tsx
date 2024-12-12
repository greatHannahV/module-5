import { TableHeaderProps } from "../Table/Table.types";
import { HeaderCellStyled, TableHeaderStyled } from "./TableHeader.styles";

const TableHeader: React.FC<TableHeaderProps> = ({ tableHeaders }) => {
  return (
    <TableHeaderStyled>
      {Object.values(tableHeaders).map((name, index) => (
        <HeaderCellStyled key={index}>{name}</HeaderCellStyled>
      ))}
    </TableHeaderStyled>
  );
};

export default TableHeader;
