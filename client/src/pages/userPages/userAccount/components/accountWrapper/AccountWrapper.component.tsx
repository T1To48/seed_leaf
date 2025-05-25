import type { FCWithChildrenAndProps } from "src/types";
import { StyledPageWrapper, StyledMainSection } from "./accountWrapper.styles";

const AccountWrapper = ({ children,sidebar }: FCWithChildrenAndProps<{sidebar:JSX.Element}>) => {
  return (
    <StyledPageWrapper>
        {sidebar}
      <StyledMainSection>{children}</StyledMainSection>
    </StyledPageWrapper>
  );
};

export default AccountWrapper;
