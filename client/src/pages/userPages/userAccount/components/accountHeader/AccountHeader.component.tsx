import type { AccountHeaderProps } from "src/types";
import { StyledHeaderWrapper, StyledTitle } from "./accountHeader.styles";

const AccountHeader = ({ title }: AccountHeaderProps) => {
  return (
    <StyledHeaderWrapper>
      <StyledTitle>{title}</StyledTitle>
    </StyledHeaderWrapper>
  );
};

export default AccountHeader;
