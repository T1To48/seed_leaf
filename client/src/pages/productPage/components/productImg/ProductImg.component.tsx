import { StyledImgWrapper } from "./productImg.styles";

const ProductImg = ({ src }: { src: string }) => {
  return (
    <StyledImgWrapper>
      <img src={src} />
    </StyledImgWrapper>
  );
};

export default ProductImg;
