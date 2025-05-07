import type { ProductProps } from "src/types";
import {
  StyledProductCard,
  StyledProductImg,
  StyledProductInfoWrapper,
  StyledProductPrice,
  StyledProductTitle,
} from "./productCard.styles";
import ProductQuantity from "../productQuantity/ProductQuantity.component";

const ProductCard = ({ productDetails, isMobile }: ProductProps) => {
  const { imgSrc, title, price, currentQuantity } = productDetails;

  return (
    <td>
      <StyledProductCard>
        <StyledProductImg src={imgSrc} />
        <StyledProductInfoWrapper>
          <StyledProductTitle>{title}</StyledProductTitle>
          <StyledProductPrice>&#8364;{price.toFixed(2)}</StyledProductPrice>
          {isMobile && <ProductQuantity currentQuantity={currentQuantity} />}
        </StyledProductInfoWrapper>
      </StyledProductCard>
    </td>
  );
};

export default ProductCard;
