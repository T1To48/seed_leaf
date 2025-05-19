import { StyledDropdownDefaultItem } from "./defaultDropdownItem.styles";
import { ChevronDownIcon,ChevronUpIcon } from "@heroicons/react/24/outline";
import { ClickEventHandlerDiv } from "src/types/global.types";

const DefaultDropDownItem = ({sortOption,isDropdownOpen,onClick}:{sortOption:string;isDropdownOpen:boolean;onClick:ClickEventHandlerDiv}) => {
    const dropdownIcon=isDropdownOpen?<ChevronUpIcon /> : <ChevronDownIcon />;
    return (
    <StyledDropdownDefaultItem $isGapBig={!(sortOption.length>21)} onClick={onClick}>
      {sortOption}
      {dropdownIcon}
    </StyledDropdownDefaultItem>
  );
};

export default DefaultDropDownItem;
