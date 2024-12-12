import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 100%;
`;

export const Settings = styled.div`
  max-width: 80%;
  position: absolute;
  left: 5%;
  margin-top: 12px;
  display: grid;
  grid-template-row: 1fr 1fr;
  gap: 8px;
  z-index: 10;
  padding: 10px;
  background: rgba(72, 72, 72, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.03);
  border-radius: 16px;
  backdrop-filter: blur(25px);
  color: white;
  width: max-content;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
