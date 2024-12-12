import styled from "styled-components";

export const Title = styled.h1`
  font-size: 2.1rem;
  margin-bottom: 12px;
`;

export const CompanyInfo = styled.section`
  display: grid;
  grid-template-rows: 1;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;
  padding-left: 3px;
  padding-right: 12px;
  color: gray;
`;
