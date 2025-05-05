import {useAppSelector} from "src/redux";

import { StyledMainNav, StyledNavContainer } from "./mainNav.styles";

import {
  NavSearch,
  MainNavLeft,
  MainNavMiddle,
  MainNavRight,
  MainNavMobileSearch,
} from "./components";

const MainNav = () => {
  const { isMobile } = useAppSelector((state) => state.ui);
  
  return (
    <StyledMainNav>
      <StyledNavContainer>
        <MainNavLeft
          isMobile={isMobile}
        />

        <MainNavMiddle isMobile={isMobile}>
          <NavSearch />
        </MainNavMiddle>

        <MainNavRight />
      </StyledNavContainer>

      <MainNavMobileSearch isMobile={isMobile}>
        <NavSearch />
      </MainNavMobileSearch>
    </StyledMainNav>
  );
};

export default MainNav;
