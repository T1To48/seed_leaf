import {
  StyledProductWrapper,
  StyledProductContent,
  StyledProductName,
  StyledProductPrice,
} from "./productCard.styles";
import ProductImg from "./ProductImg.component";

const ProductCard = ({
  imgSrc,
  name,
  price,
}: {
  imgSrc: string;
  name: string;
  price: number;
}) => {
  return (
    <StyledProductWrapper>
      <StyledProductContent>
        <ProductImg src={imgSrc} />
        <StyledProductName>{name}</StyledProductName>
      </StyledProductContent>
      <StyledProductPrice>&#8364;{price.toFixed(2)}</StyledProductPrice>
    </StyledProductWrapper>
  );
};

export default ProductCard;
