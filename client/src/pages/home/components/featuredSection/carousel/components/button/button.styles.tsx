import styled from "styled-components";
import type { Direction } from "src/types";

export const StyledBtnWrapper = styled.div<{ $side: Direction }>`
  width: 7rem;
  height: 90%;
  position: absolute;
  top: 0;
  z-index: 10;
  ${({ $side }) => $side}:0;

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    display: none;
  }
`;

export const StyledButton = styled.button<{
  $isHidden: boolean;
  $side: Direction;
}>`
  display: flex;
  opacity: ${({ $isHidden }) => ($isHidden ? "0" : "1")};
  transition: opacity 0.5s ease;
  cursor: ${({ $isHidden }) => ($isHidden && "default")};;
  border: none;
  background: ${({ theme }) => theme.color.background};

  padding: 1rem;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  position: absolute;
  top: 50%;
  z-index: 10;
  ${({ $side }) => $side}:0rem;
  & > :first-child {
    width: 2.5rem;
    stroke-width: 3px;
  }
`;
