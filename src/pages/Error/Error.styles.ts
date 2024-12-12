import { Link } from "react-router-dom";
import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ErrorContent = styled.div`
  flex-direction: column;
  text-align: center;
`;

export const BackLink = styled(Link)`
  margin-top: 16px;
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
