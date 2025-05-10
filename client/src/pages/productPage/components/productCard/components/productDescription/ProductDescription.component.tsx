import { StyledProductDescription } from "./productDescription.styles";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <StyledProductDescription>
      <p>{description}</p>
    </StyledProductDescription>
  );
};

export default ProductDescription;
