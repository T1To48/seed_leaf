import styled from "styled-components";

export const StyledTopbarWrapper = styled.div<{ $isHidden: boolean }>`
  position: fixed;
  top: ${({ $isHidden }) => ($isHidden ? "0" : "12rem")};
  z-index: 950;
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid rgba(200, 200, 200, 0.9);
  box-shadow: 0px 15px 15px rgba(200, 200, 200, 0.3);
  transition: top 0.4s ease-in-out;

  & > :first-child {
    border-right: 1px solid rgba(200, 200, 200, 0.9);
  }
`;
