import { FCWithChildrenAndProps } from "src/types/global.types";
import {
  StyledDropdownWrapper,
  StyledDropdownOptions,
} from "./dropdownWrapper.styles";

const DropdownWrapper = ({
  isDropdownOpen,
  children,
}: FCWithChildrenAndProps<{ isDropdownOpen: boolean }>) => {
  return (
    <StyledDropdownWrapper>
      <StyledDropdownOptions $isOpen={isDropdownOpen}>
        {children}
      </StyledDropdownOptions>
    </StyledDropdownWrapper>
  );
};

export default DropdownWrapper;
