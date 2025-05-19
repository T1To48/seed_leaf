import { useState, useEffect } from "react";
import { defaultSortOption, otherSortOptionsArr } from "src/constants";
import type { ClickEventDiv, SortOption } from "src/types";

const useSortDropdownController = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSortOption, setCurrentSortOption] = useState(defaultSortOption);
  const [sortOptions, setSortOptions] = useState(otherSortOptionsArr);

  const toggleDropdown = (e: ClickEventDiv) => {
    e.stopPropagation();
    setIsDropdownOpen((preVal) => !preVal);
  };

  const changeCurrentSort = (newSortOption: SortOption) => {
    const updatedSortOptions = sortOptions.map((option) => {
      return option.id === newSortOption.id ? currentSortOption : option
    }).sort((a, b) => a.text.localeCompare(b.text));
    setSortOptions(updatedSortOptions);
    setCurrentSortOption(newSortOption);
  };

  useEffect(() => {
    if (!isDropdownOpen) return;
    const closeDropDown = () => setIsDropdownOpen(false)
    document.documentElement.addEventListener("click", closeDropDown)
    return () => {
      document.documentElement.removeEventListener("click", closeDropDown)
    }
  }, [isDropdownOpen])

  return { isDropdownOpen, currentSortOption, sortOptions, toggleDropdown, changeCurrentSort }
}

export default useSortDropdownController;