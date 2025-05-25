import type { RouteParams } from "src/types";
import { StyledLinksWrapper } from "./sidebarLinks.styles";
import { linksArr } from "src/constants";
import SidebarLinkItem from "./sidebarLinkItem/SidebarLinkItem.component";

const SidebarLinks = ({ currentPage }: { currentPage: RouteParams }) => {
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
