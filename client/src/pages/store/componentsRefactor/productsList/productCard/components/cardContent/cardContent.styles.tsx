import styled from "styled-components";

export const StyledCardContentWrapper = styled.div`
  display: grid;
  grid-template: repeat(3fr) / 1fr;
  justify-items: center;
  row-gap: 1rem;
  width: 100%;
  z-index: 1;
  padding-top: 2rem;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    row-gap: 2rem;
  }
`;
