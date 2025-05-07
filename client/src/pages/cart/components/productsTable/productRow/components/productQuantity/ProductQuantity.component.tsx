import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  StyledQuantity,
  StyledQtyCounter,
  StyledQtyBtn,
  StyledCurrentQty,
} from "./productQuantity.styles";

const ProductQuantity = ({currentQuantity}:{currentQuantity:number}) => {
  return (
    <StyledQuantity>
      <StyledQtyCounter>
        <StyledQtyBtn>
          <MinusIcon />
        </StyledQtyBtn>
        <StyledCurrentQty>{currentQuantity}</StyledCurrentQty>
        <StyledQtyBtn>
          <PlusIcon />
        </StyledQtyBtn>
      </StyledQtyCounter>
      <TrashIcon />
    </StyledQuantity>
  );
};

export default ProductQuantity;
