import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  top: 0.75rem;
  right: 20px;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: #38a169;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 9999;

  &:hover {
    background-color: #276749;
  }

  &:disabled {
    background-color: #68d391;
    cursor: not-allowed;
  }

  @media (max-width: 500px) {
    position: fixed;
    bottom: 0.75rem;
    right: 20px;
    top: auto;
  }
`;

export default StyledButton;
