import styled from "styled-components";

export const HomeWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding-top: 40px;
  grid-template-rows: auto auto;

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 400px;
    grid-template-rows: 1fr 1fr;
    height: 100vh;
  }
`;

export const MainTableBox = styled.section`
  overflow: scroll;
  margin-left: 20px;

  @media (min-width: 1280px) {
    grid-row: span 2;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SectionHeading = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const BiggestTableWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  grid-row: 1;

  @media (min-width: 1280px) {
    flex-direction: column;
    height: 100vh;
    grid-column: 2;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BiggestTableBoxes = styled.aside`
  font-size: 0.875rem;
  margin-left: 32px;
  margin-right: 4px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 300px;
  padding: 1rem;
  width: 50%;
  align-self: start;

  @media (min-width: 1024px) {
    overflow: hidden;
  }
`;
