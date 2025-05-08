import styled from "styled-components";

export const StyledStageCircle = styled.div`
  background: white;
  width: 10.1rem;
  height: 10.1rem;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  z-index: 10;
  position: relative;
  box-shadow: inset 0 -0.5rem 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: -0.95rem;
    left: -0.95rem;
    width: 12rem;
    height: 12rem;
    z-index: 5;
    border: 1rem solid ${({ theme }) => theme.color.primary};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.3);
  }
`;

export const StyledStageIcon = styled.img<{ $size: number }>`
  width: ${({ $size }) => $size}rem;
  padding: 1rem;
`;
