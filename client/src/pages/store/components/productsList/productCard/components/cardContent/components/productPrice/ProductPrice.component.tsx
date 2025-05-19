import styled from "styled-components";

const StyledProductPrice = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  }
`;
const ProductPrice = ({ price }: { price: number }) => {
  return <StyledProductPrice>&#8364;{price.toFixed(2)}</StyledProductPrice>;
};

export default ProductPrice;
