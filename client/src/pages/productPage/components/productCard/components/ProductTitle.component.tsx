import styled from "styled-components";
const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xLarge.desktop};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.color.primary};
    bottom: 2px;
    left: 50%;
    height: 2px;
    transition: width 0.3s ease-out, left 0.3s ease-out;
    transform: translateX(-50%);
    width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xLarge.mobile};
  }
`;
const ProductTitle = ({ title }: { title: string }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default ProductTitle;
