import { StyledNavWrapper } from "./NavWrapper.styles";
import type { FCWithChildren } from "src/types";
import { useToggleToolBar } from "src/customHooks";

const NavWrapper = ({ children }: FCWithChildren) => {
  const isHidden = useToggleToolBar();

  return (
    <StyledNavWrapper $isHidden={isHidden}>
        {children}
    </StyledNavWrapper>
    );
};

export default NavWrapper;
