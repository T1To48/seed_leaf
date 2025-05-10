import { StyledAddToCartBtn, StyledCartIcon } from "./addToCartBtn.styles";

const AddToCartBtn = () => {
  return (
    <StyledAddToCartBtn onClick={()=>console.log("Add to cart btn, on click  🥹")}>
      <StyledCartIcon />
      Add to Cart
    </StyledAddToCartBtn>
  );
};

export default AddToCartBtn;
