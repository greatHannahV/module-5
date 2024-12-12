import styled from "styled-components";
import theme from "../../styles/theme.styles";

export const TableHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.padding.medium} 1rem;
  border-top: 0.2px solid gray;
  border-bottom: 0.2px solid emerald;
  margin-top: 1rem;
  text-align: center;
`;

export const HeaderCellStyled = styled.div`
  display: flex;
  font-weight: bold;
  color: gray;
  flex: 1;
  justify-content: center;

  &:first-child {
    justify-content: left;
  }

  &:last-child {
    display: none;
  }
`;
