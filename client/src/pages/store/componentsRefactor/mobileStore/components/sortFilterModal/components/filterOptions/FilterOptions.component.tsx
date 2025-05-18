import {
  CategoriesFilter,
  PriceFilter,
} from "src/pages/store/componentsRefactor/sidebar/components";

const FilterOptions = () => {
  return (
    <>
      <CategoriesFilter />
      <PriceFilter />
    </>
  );
};

export default FilterOptions;
