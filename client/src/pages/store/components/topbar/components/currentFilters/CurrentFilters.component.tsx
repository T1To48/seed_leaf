import { useState } from "react";
import { StyledCurrentFiltersWrapper } from "./currentFilters.styles";
import { FilterBadge, ResetFiltersBadge } from "./components";
import type { Filter } from "src/types";

const filtersArr: Filter[] = [
  {
    title: "Category",
    value: "microgreens",
  },
  {
    title: "Price",
    value: 10,
  },
];
const CurrentFilters = () => {
  const [currentFilters, setCurrentFilters] = useState(filtersArr);

  const removeFilter = (filterToRemove: Filter) => {
    const { title, value } = filterToRemove;
    setCurrentFilters((preValue) =>
      preValue.filter(
        (filter) => title !== filter.title && value !== filter.value
      )
    );
  };

  const resetFilters = () => setCurrentFilters([]);

  if (!currentFilters.length) return null;

  return (
    <StyledCurrentFiltersWrapper>
      <ResetFiltersBadge onClick={resetFilters} />

      {currentFilters.map((filter) => (
        <FilterBadge
          filterInfo={filter}
          onClick={() => removeFilter(filter)}
          key={filter.title + filter.value}
        />
      ))}
    </StyledCurrentFiltersWrapper>
  );
};

export default CurrentFilters;
