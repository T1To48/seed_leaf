import styled from "styled-components";

const StyledProductImgWrapper = styled.div`
  height: 7rem;
  width: 8rem;
  overflow: hidden;
  display: flex;
  align-items: end;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  & img {
    aspect-ratio: 12/13;
    width: 8rem;
    object-fit: cover;
  }
`;

const ProductImg = ({ src }: { src: string }) => {
  return (
    <StyledProductImgWrapper>
      <img src={src} />
    </StyledProductImgWrapper>
  );
};

export default ProductImg;
