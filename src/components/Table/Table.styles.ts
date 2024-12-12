import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../styles/theme.styles";

type TableCellStyledProps = {
  $last: boolean;
  $first: boolean;
  $bold: boolean;
  $textColor?: string;
};

export const MainTableContainerStyled = styled.main`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100vh;
  padding-bottom: 2rem;
  min-width: 800px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderStyled = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: ${theme.padding.medium};
  background-color: ${theme.background.main};
  width: 100%;
`;

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

export const TableRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 0.2px solid emerald;
  flex-wrap: wrap;
  transition: all 0.3s;
  text-align: center;
  height: 50px;

  &:hover {
    background-color: ${theme.color.main};
    box-shadow: 0px 2px 8px 0px rgba(99, 99, 99, 0.2);
  }
  &:last-child {
    border-bottom: 0.2px solid emerald;
  }
  &:first-child {
    border-top: ${theme.border.main};
  }

  @media (min-width: 850px) {
    padding: 5px;
  }
`;

export const TableCellStyled = styled(NavLink)<TableCellStyledProps>`
  flex: 1;
  padding: 0.2rem 1rem;
  ${({ $first, $last, $bold, $textColor }) => {
    return css`
      min-width: ${$first ? "250px" : $last ? "200px" : "auto"};
      font-weight: ${$bold ? "bold" : "normal"};
      color: ${$textColor || "inherit"};
      border-right: ${$first ? theme.border.main : "none"};
    `;
  }}
  border-bottom: ${theme.border.main};
  text-decoration: none;
  align-items: top;
  justify-content: center;
  display: flex;

  &:first-child {
    min-width: 250px;
    justify-content: left;
    text-align: left;
  }
`;
