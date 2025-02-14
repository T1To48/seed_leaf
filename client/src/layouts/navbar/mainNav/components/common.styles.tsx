import styled from "styled-components";

export const StyledNavItem = styled.div`
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    display: flex;
    align-items: center;
  }
`;

export const StyledMiddleNavItem = styled(StyledNavItem)`
  width: 80%;
`;