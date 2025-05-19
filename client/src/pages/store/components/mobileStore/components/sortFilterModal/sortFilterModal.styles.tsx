import styled from "styled-components";

export const StyledModalLayer = styled.div<{ $isHidden: boolean }>`
  position: fixed;
  z-index: 960;
  background: rgba(0, 0, 0, 0.5);
  top: 12rem;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: transform 0.5s linear;
  transform: ${({ $isHidden }) =>
    $isHidden ? "translateY(-200rem)" : "translateY(0rem)"};
`;

export const StyledModalContainer = styled.div<{ $isHidden: boolean }>`
  position: absolute;
  top: 32vh;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.background};
  padding: 2rem 2rem 3rem;
  transition: transform 0.6s ease;
  transform: ${({ $isHidden }) =>
    $isHidden ? "translateY(50rem)" : "translateY(0rem)"};
`;
