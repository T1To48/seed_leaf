import { useNavigate } from "react-router";
import {
  StyledCheckoutContainer,
  StyledCheckout,
  StyledCartTotal,
  StyledCheckoutBtn,
} from "./cartCheckout.styles";

const CartCheckout = () => {
    
  const navigate = useNavigate();
  return (
    <StyledCheckoutContainer>
      <textarea placeholder="Special Order Instructions" maxLength={255} />
      <StyledCheckout>
        <StyledCartTotal>
          <p>Total</p>
          <p>&#8364;10.50</p>
        </StyledCartTotal>
        <StyledCheckoutBtn onClick={() => navigate("/user/checkout")}>
          Checkout
        </StyledCheckoutBtn>
      </StyledCheckout>
    </StyledCheckoutContainer>
  );
};

export default CartCheckout;
