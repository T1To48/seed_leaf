import styled from "styled-components";

const StyledProductTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.color.primary};
    bottom: 0px;
    left: 50%;
    height: 1.5px;
    transition: width 0.3s ease-out, left 0.3s ease-out;
    transform: translateX(-50%);
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
      font-size: ${({ theme }) => theme.fontSize.large.mobile};
  }
`;
const ProductTitle = ({ title }: { title: string }) => {
  return <StyledProductTitle>{title}</StyledProductTitle>;
};

export default ProductTitle;
