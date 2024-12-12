import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  animation: loading 2.5s infinite;

0% {
    transform: translateX(-150%);
  }
  50% {
    transform: translateX(-60%);
  }
  0% {
    transform: translateX(150%);
  }
`;

export const ShimmerContainerStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ShimmerEffectStyled = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  transform: skewX(-20deg);
  animation: ${shimmer} 2s infinite;
`;
