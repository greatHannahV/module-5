import styled from "styled-components";

type ChangePercentProps = {
  $changePercent: number;
};

export const TableContainerStyled = styled.aside`
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    border-bottom: 0.2px solid gray;
    padding: 0.5rem 0;
    margin-top: 1rem;
  }
`;

export const CompanyRowStyled = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, auto);
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const SymbolStyled = styled.div`
  font-weight: bold;
`;

export const ChangePercentStyled = styled.div<ChangePercentProps>`
  text-align: right;
  color: ${(props) => (props.$changePercent < 0 ? "red" : "green")};
`;

export const ShortNameStyled = styled.div`
  font-size: 0.75rem;
  color: gray;
`;

export const ChangeStyled = styled.div`
  text-align: right;
  font-size: 0.75rem;
  color: gray;
`;
