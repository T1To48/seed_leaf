import styled from "styled-components";
import AmaranthImg from "src/assets/Amaranth.jpg";
import ArugulaImg from "src/assets/Arugula.jpg";
import CarrotImg from "src/assets/Celery.jpg";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
const StyledProductsList = styled.div`
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  justify-items: center;
  padding: 5rem;
  gap: 7rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  grid-template: auto / 1fr;
  gap: 4rem;
  padding: 5rem 0 ;
  }
  
`;
const StyledProductCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 10/14;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0 6.4px 40px rgba(75, 35, 94, 0.2),
    0 3px 10px ${({ theme }) => theme.color.secondaryGreen(0.3)};
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: 0 3px 10px ${({ theme }) => theme.color.secondaryGreen(0.2)};

    & img {
      transform: scale(1.4);
    }
    
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 80%;
  aspect-ratio: 13 / 14;
    &:hover {
      box-shadow: 0 6.4px 40px rgba(75, 35, 94, 0.2),
      0 3px 10px ${({ theme }) => theme.color.secondaryGreen(0.3)};
    & img {
      transform: scale(1.3);
    }
    }
  }
  
`;
const StyledCardImg = styled.img`
  width: 90%;
  object-fit: cover;
  transform: scale(1.1);
  margin-top: -5rem;
  transition: transform 0.5s ease;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  width: 65%;
  transform: scale(1.3);
  }

`;
const StyledCardContent = styled.div`
  display: grid;
  grid-template: repeat(3fr) / 1fr;
  justify-items: center;
  row-gap: 1rem;
  width: 100%;
  z-index: 1;
  padding-top: 2rem;
  background: ${({ theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.text};

  & h2 {
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
  }

  & h4 {
    font-size: ${({ theme }) => theme.fontSize.small.desktop};
  }

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  row-gap: 2rem;

    & h2 {
      font-size: ${({ theme }) => theme.fontSize.large.mobile};
   
    }
    & h4 {
      font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    }
  }
`;
const StyledCardBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 80%;
  gap: 1rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  margin-top: 1rem;
  transition: 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }

  & > :first-child {
    width: 2rem;
    stroke-width: 2px;
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  padding: 1rem 0;
  width: 55%;
  }

`;
const ProductsList = () => {
  return (
    <StyledProductsList>
      <StyledProductCard to="view-product/9bef33df-a3e4-4fda-b719-75dcdff5664a">
        <StyledCardImg src={AmaranthImg} />
        <StyledCardContent>
          <h2>Amaranth</h2>
          <h4>&#8364;10.50</h4>
          <StyledCardBtn>
            <ShoppingCartIcon />
            Add To Cart
          </StyledCardBtn>
        </StyledCardContent>
      </StyledProductCard>

      <StyledProductCard to="https://www.google.com">
        <StyledCardImg src={ArugulaImg} />
        <StyledCardContent>
          <h2>Amaranth</h2>
          <h4>&#8364;10.50</h4>
          <StyledCardBtn>
            <ShoppingCartIcon />
            Add To Cart
          </StyledCardBtn>
        </StyledCardContent>
      </StyledProductCard>
      <StyledProductCard to="https://www.google.com">
        <StyledCardImg src={CarrotImg} />
        <StyledCardContent>
          <h2>Amaranth</h2>
          <h4>&#8364;10.5</h4>
          <StyledCardBtn>
            <ShoppingCartIcon />
            Add To Cart
          </StyledCardBtn>
        </StyledCardContent>
      </StyledProductCard>
      <StyledProductCard to="https://www.google.com">
        <StyledCardImg src="https://supergruen.shop/cdn/shop/files/supergruen_Amarant-01_web_qua.jpg?v=1685456886" />
        <StyledCardContent>
          <h2>Amaranth</h2>
          <h4>&#8364;10.5</h4>
          <StyledCardBtn>
            <ShoppingCartIcon />
            Add To Cart
          </StyledCardBtn>
        </StyledCardContent>
      </StyledProductCard>
      <StyledProductCard to="https://www.google.com">
        <StyledCardImg src="https://supergruen.shop/cdn/shop/files/supergruen_Amarant-01_web_qua.jpg?v=1685456886" />
        <StyledCardContent>
          <h2>Amaranth</h2>
          <h4>&#8364;10.5</h4>
          <StyledCardBtn>
            <ShoppingCartIcon />
            Add To Cart
          </StyledCardBtn>
        </StyledCardContent>
      </StyledProductCard>
    </StyledProductsList>
  );
};

export default ProductsList;
