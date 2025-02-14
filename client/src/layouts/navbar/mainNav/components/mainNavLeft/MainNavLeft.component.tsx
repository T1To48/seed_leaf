import { StyledNavItem } from "../common.styles";
import NavMobileMenuIcons from "./NavMobileMenuIcons.component";

import NavLogo from "./NavLogo.component";
import type { MainNavLeftProps } from "src/types";

const MainNavLeft = ({ isMobile }: MainNavLeftProps) => {
  return (
    <StyledNavItem>
      {isMobile && <NavMobileMenuIcons />}
      <NavLogo />
    </StyledNavItem>
  );
};

export default MainNavLeft;
