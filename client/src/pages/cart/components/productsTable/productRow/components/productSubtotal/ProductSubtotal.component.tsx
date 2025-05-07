import styled from "styled-components";

const StyledSubTotal = styled.div`
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    text-align: center;
  }
`;
const ProductSubtotal = ({subtotal}:{subtotal:number}) => {
  return (
    <td>
      <StyledSubTotal>&#8364;{subtotal.toFixed(2)}</StyledSubTotal>
    </td>
  );
};

export default ProductSubtotal;
