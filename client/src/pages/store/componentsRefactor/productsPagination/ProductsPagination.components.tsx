import {
  PaginationWrapper,
  PaginationArrows,
  PagesNumbers,
} from "./components";

const ProductsPagination = () => {
  return (
    <PaginationWrapper>
      <PaginationArrows>
        <PagesNumbers/>
      </PaginationArrows>
    </PaginationWrapper>
  );
};

export default ProductsPagination;
