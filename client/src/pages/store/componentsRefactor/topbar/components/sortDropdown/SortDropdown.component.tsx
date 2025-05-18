import {
  DefaultDropDownItem,
  DropdownItem,
  DropdownWrapper,
} from "./components";
import { useSortDropdownController } from "src/customHooks";

const SortDropdown = () => {
  const {
    isDropdownOpen,
    currentSortOption,
    sortOptions,
    toggleDropdown,
    changeCurrentSort,
  } = useSortDropdownController();


  return (
    <DropdownWrapper isDropdownOpen={isDropdownOpen}>
      <DefaultDropDownItem
        sortOption={currentSortOption.text}
        isDropdownOpen={isDropdownOpen}
        onClick={toggleDropdown}
      />
      <div/>
      {sortOptions.map((sortOption) => (
        <DropdownItem
          sortOption={sortOption.text}
          onClick={() => changeCurrentSort(sortOption)}
          key={sortOption.id}
        />
      ))}
    </DropdownWrapper>
  );
};

export default SortDropdown;
