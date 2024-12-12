import styled from "styled-components";
import theme from "../../../styles/theme.styles";

export const SkeletonHeaderContainerStyled = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background-color: ${theme.background.main};
  padding: 0.625rem;
  overflow: hidden;
`;

export const HeaderContentStyled = styled.div`
  margin: 2.5rem auto;
  grid-column: span 2;
`;
