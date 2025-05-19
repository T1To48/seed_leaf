import { ProductDB } from "src/types";
import { CardContent, CardImg } from "./components";
import { StyledProductCard } from "./productCard.styles";

const ProductCard = ({ productDetails }: { productDetails: ProductDB }) => {
  const { id, name, price, img } = productDetails;
  return (
    <StyledProductCard to={"view-product/" + id}>
      <CardImg src={img} />
      <CardContent title={name} price={price} />
    </StyledProductCard>
  );
};

export default ProductCard;
