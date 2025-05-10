import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";

export const StyledAddToCartBtn = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  transition: 0.2s ease-out;
  margin-bottom: 1rem;
  /* & svg {
    width: 2rem;
    stroke-width: 2px;
  } */
  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
`;

export const StyledCartIcon=styled(ShoppingCartIcon)`
    width: 2rem;
    stroke-width: 2px;
`
