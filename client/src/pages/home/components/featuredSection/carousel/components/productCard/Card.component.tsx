import { Product } from "src/types";
import { StyledProductCard } from "./card.styles";
import { CardContent, CardImg } from "./components";
const Card = ({
  product,
  translateValue,
}: {
  product: Product;
  translateValue: number;
}) => {
  return (
    <StyledProductCard  $translateValue={translateValue}>
      <CardImg src={product.img} />
      <CardContent title={product.title} price={product.price} />
    </StyledProductCard>
  );
};

export default Card;
