import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";

export const StyledAddToCartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 80%;
  gap: 1rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  margin-top: 1rem;
  transition: 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    padding: 1rem 0;
    width: 55%;
  }
`;

export const StyledCartIcon = styled(ShoppingCartIcon)`
  width: 2rem;
  stroke-width: 2px;
`;
