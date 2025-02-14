import styled from "styled-components";

export const StyledMainNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: ${({ theme }) => theme.navbar.mainNavHeight.desktop};
  padding: 0.5rem 2rem;
  background-color: ${({ theme }) => theme.color.primary};

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: ${({ theme }) => theme.navbar.mainNavHeight.mobile};
  }
`;

export const StyledNavContainer = styled.div`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    justify-content: space-between;
    gap: 0;
  }
`;





