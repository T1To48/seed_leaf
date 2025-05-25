import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import styled from "styled-components";

export const StyledLinkWrapper = styled(Link)<{ $isCurrentPage: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color.text};
  background: ${({ $isCurrentPage }) =>
    $isCurrentPage ? "rgba(169, 169, 169, 0.1)" : "inherit"};
  padding: 1rem 1.2rem;
  border-bottom: 0.2rem solid rgba(169, 169, 169, 0.1);
  position: relative;
  &::before {
    content: "";
    display: ${({ $isCurrentPage }) => ($isCurrentPage ? "block" : "none")};
    position: absolute;
    background: ${({ theme }) => theme.color.primary};
    left: 0;
    top: 0;
    height: 100%;
    width: 0.5rem;
  }
  &:hover {
    & > :first-child {
      & > :last-child {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

export const StyledLinkRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledLinkIconWrapper = styled.div`
  & svg {
    width: 2.7rem;
    stroke-width: 2px;
  }
`;

export const StyledLinkText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const StyledArrowIcon = styled(ChevronRightIcon)`
  width: 3rem;
  stroke-width: 2px;
`;
