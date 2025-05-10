import type { Product } from "src/types";
import { StyledCardWrapper } from "./productCard.styles";
import {
  ProductTitle,
  ProductPrice,
  ProductQuantity,
  AddToCartBtn,
  ProductSize,
  ProductDescription,
} from "./components";

const ProductCard = ({ product }: { product: Product }) => {
  const { title, price,description } = product;
  return (
    <StyledCardWrapper>
      <ProductTitle title={title} />
      <ProductPrice price={price} />
      <ProductQuantity />
      <AddToCartBtn />
      <ProductSize />
      <ProductDescription description={description} />
    </StyledCardWrapper>
  );
};

export default ProductCard;
