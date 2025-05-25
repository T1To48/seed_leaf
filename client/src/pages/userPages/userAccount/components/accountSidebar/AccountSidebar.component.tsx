import type { RouteParams } from "src/types";
import { StyledSidebarWrapper } from "./accountSidebar.styles";
import { SidebarLinks, SidebarUserName } from "./components";
const AccountSidebar = ({ currentPage }: { currentPage: RouteParams }) => {
  return (
    <StyledSidebarWrapper>
      <SidebarUserName userName={"{UserName}"} />
      <SidebarLinks currentPage={currentPage} />
    </StyledSidebarWrapper>
  );
};

export default AccountSidebar;
