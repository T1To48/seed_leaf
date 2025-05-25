import { StyledSidebarWrapper } from "./accountSidebar.styles";
import { SidebarLinks, SidebarUserName } from "./components";
const AccountSidebar = () => {
  return (
    <StyledSidebarWrapper>
      <SidebarUserName userName={"{UserName}"} />
      <SidebarLinks/>
    </StyledSidebarWrapper>
  );
};

export default AccountSidebar;
