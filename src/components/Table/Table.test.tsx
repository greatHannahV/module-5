import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Table from "./Table";
import { Meta } from "../../services/data.types";
import mockStocks from "../../services/__mock__/mockStocks.json";
import { TableCellStyled, TableRowStyled } from "./Table.styles";
import theme from "../../styles/theme.styles";
import { getTextColorForTable } from "./Table.util";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

const mockIsLoading = false;
const typedStocks: Meta[] = mockStocks as Meta[];

describe("Table", () => {
  it("A component renders correctly", () => {
    render(
      <MemoryRouter>
        <Table stocks={typedStocks} isLoading={mockIsLoading} />
      </MemoryRouter>
    );
    const textElement = screen.getByText(
      /Realtime Prices for Dow Jones stocks/i
    );
    expect(textElement).toBeInTheDocument();
  });

  it("Applies correct styles based on props", () => {
    render(
      <MemoryRouter>
        <TableCellStyled
          to="/"
          $first={true}
          $last={false}
          $bold={true}
          $textColor="red"
        >
          Test Cell
        </TableCellStyled>
      </MemoryRouter>
    );

    const cell = screen.getByText("Test Cell");

    expect(cell).toHaveStyle("min-width: 250px");
    expect(cell).toHaveStyle("font-weight: bold");
    expect(cell).toHaveStyle("color: red");
    expect(cell).toHaveStyle(`border-right: ${theme.border.main}`);
  });

  it("Conditional styling is applied", () => {
    const key = "regularMarketChange";
    const value = "2.5";

    render(
      <MemoryRouter>
        <TableCellStyled
          to="/"
          $first={true}
          $last={false}
          $bold={true}
          $textColor={getTextColorForTable(key, value)}
        >
          Test Cell
        </TableCellStyled>
      </MemoryRouter>
    );

    const cell = screen.getByText("Test Cell");
    expect(cell).toHaveStyle("color: green");
  });

  it("All data is rendered", () => {
    const data = mockStocks.length;
    render(
      <MemoryRouter>
        <Table stocks={typedStocks} isLoading={mockIsLoading}>
          {mockStocks.map((_, index) => (
            <TableRowStyled key={index} role="row">
              Test Row
            </TableRowStyled>
          ))}
        </Table>
      </MemoryRouter>
    );
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(data);
  });
});
