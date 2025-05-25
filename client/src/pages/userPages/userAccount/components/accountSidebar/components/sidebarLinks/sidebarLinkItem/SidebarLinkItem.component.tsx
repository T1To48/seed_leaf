import type { LinkItemProps } from "src/types";
import {
  StyledLinkWrapper,
  StyledLinkText,
  StyledArrowIcon,
  StyledLinkIconWrapper,
  StyledLinkRightSide,
} from "./sidebarLinkItem.styles";

const SidebarLinkItem = ({ linkData, currentPage }: LinkItemProps) => {
  const { text, icon, routeParam } = linkData;
  return (
    <StyledLinkWrapper
      to={"/user/account/" + routeParam}
      $isCurrentPage={currentPage === routeParam}
    >
      <StyledLinkRightSide>
        <StyledLinkIconWrapper>{icon}</StyledLinkIconWrapper>
        <StyledLinkText>{text}</StyledLinkText>
      </StyledLinkRightSide>
      
      <StyledArrowIcon />
    </StyledLinkWrapper>
  );
};

export default SidebarLinkItem;
