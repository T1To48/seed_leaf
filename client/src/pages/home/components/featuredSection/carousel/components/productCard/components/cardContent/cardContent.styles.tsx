import styled from "styled-components";

export const StyledCardContentWrapper = styled.div`
  position: relative;
  z-index: 5;
  color: ${({ theme }) => theme.color.text};
`;

export const StyledCardTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  position: relative;
  width: fit-content;
  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.color.primary};
    bottom: 0px;
    left: 50%;
    width: 0;
    height: 1.5px;
    transition: width 0.3s ease-out, left 0.3s ease-out;
    transform: translateX(-50%);
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  }
`;
export const StyledCardPrice = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.small.mobile};
  }
`;
