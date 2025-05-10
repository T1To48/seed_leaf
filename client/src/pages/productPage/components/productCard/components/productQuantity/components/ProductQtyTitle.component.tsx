import styled from "styled-components";
const StyledQtyTitle = styled.h5`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  }
`;
const ProductsQtyTitle = () => {
  return <StyledQtyTitle>Quantity</StyledQtyTitle>;
};

export default ProductsQtyTitle;
