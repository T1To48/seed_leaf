import { StyledFilterBadge } from "./filterBadge.styles";
import { XCircleIcon } from "@heroicons/react/24/outline";
import type { Filter } from "src/types";
const FilterBadge = ({
  filterInfo,
  onClick,
}: {
  filterInfo: Filter;
  onClick: () => void;
}) => {
  const { title, value } = filterInfo;

  return (
    <StyledFilterBadge onClick={onClick}>
      <XCircleIcon /> {title}: {""}{title === "Price" ? <>&#8364;{value}</> : value}
    </StyledFilterBadge>
  );
};

export default FilterBadge;
