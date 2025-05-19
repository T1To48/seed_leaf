import { StyledResetFiltersBadge } from "./filterBadge.styles";
import { XCircleIcon } from "@heroicons/react/24/outline";

const ResetFiltersBadge = ({onClick}:{onClick:()=>void}) => {
  return (
    <StyledResetFiltersBadge onClick={onClick}>
      <XCircleIcon />
      Reset Filters
    </StyledResetFiltersBadge>
  );
};

export default ResetFiltersBadge;
