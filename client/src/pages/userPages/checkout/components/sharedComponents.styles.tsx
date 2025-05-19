import styled from "styled-components";

export const StyledSectionWrapper = styled.div`
  height: 50rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: initial;
  }
`;