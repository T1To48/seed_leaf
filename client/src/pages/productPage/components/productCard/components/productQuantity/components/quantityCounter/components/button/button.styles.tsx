import styled from "styled-components";

export const StyledQtyBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0.7rem;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  aspect-ratio: 1;
  background: ${({ theme }) => theme.color.primary};
  transition: 0.2s ease-out;

  & svg {
    color: ${({ theme }) => theme.color.secondary};
    width: 1.1rem;
    stroke-width: 4px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
`;
