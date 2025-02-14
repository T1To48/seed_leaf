import type { MainNavSearchBar } from "src/types";
import { StyledMobileNavSearch } from "./MainNavMobileSearch.styles";

const MainNavMobileSearch = ({ isMobile, children }: MainNavSearchBar) => {
  if (!isMobile) return null;

  return <StyledMobileNavSearch>{children}</StyledMobileNavSearch>;
};

export default MainNavMobileSearch;
