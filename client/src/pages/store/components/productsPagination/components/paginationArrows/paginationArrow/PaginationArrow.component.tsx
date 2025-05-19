import { StyledPaginationArrow } from "./paginationArrow.styles";

const PaginationArrow = ({
  size,
  to,
  arrowIcon,
}: {
  size: number;
  to: string;
  arrowIcon: JSX.Element;
}) => {
  return (
    <StyledPaginationArrow $size={size} to={to}>
      {arrowIcon}
    </StyledPaginationArrow>
  );
};

export default PaginationArrow;
