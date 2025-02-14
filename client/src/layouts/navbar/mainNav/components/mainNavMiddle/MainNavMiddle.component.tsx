import type { MainNavSearchBar } from "src/types";
import { StyledMiddleNavItem } from "../common.styles";

const MainNavMiddle = ({ isMobile, children }: MainNavSearchBar) => {
  if (isMobile) return null;

  return <StyledMiddleNavItem>{children}</StyledMiddleNavItem>;
};

export default MainNavMiddle;
