import { useNavigate, useParams } from "react-router";
import type { RouteParams } from "src/types";
import { StyledLinksWrapper } from "./sidebarLinks.styles";
import { linksArr } from "./linksArr";
import SidebarLinkItem from "./sidebarLinkItem/SidebarLinkItem.component";
const SidebarLinks = () => {
  const navigate = useNavigate();
  const { currentPage } = useParams<{ currentPage: RouteParams }>();

  if (!currentPage) {
    navigate("/orders");
    return null;
  }
  return (
    <StyledLinksWrapper>
      {linksArr.map((link) => (
        <SidebarLinkItem
          linkData={link}
          currentPage={currentPage}
          key={link.text}
        />
      ))}
    </StyledLinksWrapper>
  );
};

export default SidebarLinks;
