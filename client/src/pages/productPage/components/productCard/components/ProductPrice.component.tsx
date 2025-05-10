import styled from "styled-components";

const StyledPrice = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.large.mobile};
  }
`;
const ProductPrice = ({price}:{price:number}) => {
  return <StyledPrice>&#8364;{price.toFixed(2)}</StyledPrice>;
};

export default ProductPrice;
