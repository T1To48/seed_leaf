import { StyledTotalPrice } from "./totalPrice.styles";

const TotalPrice = ({
  totalItems,
  totalPrice,
}: {
  totalItems: number;
  totalPrice: number;
}) => {
  return (
    <StyledTotalPrice>
      <div>
        TOTAL <span>{`(${totalItems} items)`}</span>
      </div>
      <div>&#8364;{totalPrice.toFixed(2)}</div>
    </StyledTotalPrice>
  );
};

export default TotalPrice;
