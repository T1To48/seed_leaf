import styled from "styled-components";

export const StyledQuantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  /* width: 75%; */
  border-radius: ${({ theme }) => theme.borderRadius.small};

  /* box-shadow:inset 0 6.4px 40px rgba(75, 35, 94, 0.1); */

  padding: 1rem 1.5rem;
  margin: 3rem 0;
  margin-left: 3rem;
  & > svg {
    width: 2rem;
    stroke-width: 2px;
    color: ${({ theme }) => theme.color.accent};
    transition: 0.2s ease-out;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.color.hover};
    }
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    padding: 0;
    margin-left: 2rem;
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

export const StyledQtyCounter = styled.div`
  display: flex;
  align-items: center;
`;
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
export const StyledCurrentQty = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 0 1rem;
`;
