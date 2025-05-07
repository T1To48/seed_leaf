import styled from "styled-components";
import { Header, CartCheckout, ProductsTable } from "./components";
const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 20rem auto 0;
  min-height: 70vh;

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
    margin: 18rem 0 5rem 0;
    /* min-height: 90vh; */
  }
`;

const Cart = () => {
  return (
    <StyledPageWrapper>
      <Header />
      <ProductsTable />
      <CartCheckout />
    </StyledPageWrapper>
  );
};

export default Cart;
