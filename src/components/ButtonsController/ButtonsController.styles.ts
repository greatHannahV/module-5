import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const RadioButton = styled.label`
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
`;
