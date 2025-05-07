import styled from "styled-components";

export const StyledHeroTitle = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.giant};
  font-weight: ${({ theme }) => theme.fontWeight.maxBold};
  letter-spacing: 3px;
  margin-bottom: 2rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge.mobile};
  }
`;
