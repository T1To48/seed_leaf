import styled from "styled-components";
import { Link } from "react-router";

export const StyledPaginationArrow = styled(Link)<{ $size: number }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2),
    inset 0px 4px 20px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.color.text};
  transition: transform 0.2s ease-in;

  & svg {
    width: ${({ $size }) => $size}rem;
    stroke-width: 2.5px;
  }

  &:hover {
    box-shadow: none;
    transform: scale(1.3);
    color: ${({ theme }) => theme.color.primary};
  }
`;
