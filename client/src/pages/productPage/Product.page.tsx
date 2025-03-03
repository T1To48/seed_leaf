import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import {ProductBreadCrumbs} from "./components/index"
import styled from "styled-components"
import AmaranthImg from "src/assets/Amaranth.jpg";
import { ShoppingCartIcon,PlusIcon,MinusIcon } from "@heroicons/react/24/outline";
const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 17rem auto 0;
  min-height: 70vh;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
  margin: 4rem 0 10rem;
  }
`;
const StyledProductWrapper = styled.div`
    display:flex;
    align-items: start;
    justify-content: center;
    gap:10rem;
width:100%;
/* background-color: red; */
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
flex-direction: column;
align-items: center;
gap: 5rem;
}
`
const StyledSection = styled.section`

`

const StyledImgContainer = styled(StyledSection)`
width: 40%;
box-shadow: 0 6.4px 40px rgba(75, 35, 94, 0.2);
border-radius:${({theme})=>theme.borderRadius.medium};

& img{
    border-radius:${({theme})=>theme.borderRadius.medium};
    object-fit: cover;
    width:100%;
    aspect-ratio: 12/12;
}
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
    border-radius:0;
}
`

const StyledProductDetails = styled(StyledSection)`
    width:35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:${({theme})=>theme.color.text};
gap:2rem;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
gap:3rem;

}

`
const StyledTitle = styled.h2`
    font-size:${({theme})=>theme.fontSize.xLarge.desktop};
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
    font-size:${({theme})=>theme.fontSize.xLarge.mobile};

}
`
const StyledPrice = styled.h4`
    font-size:${({theme})=>theme.fontSize.medium.desktop};
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size:${({theme})=>theme.fontSize.large.mobile};

}
`
const StyledQtyContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 75%;
border-radius:${({theme})=>theme.borderRadius.small};

box-shadow:inset 0 6.4px 40px rgba(75, 35, 94, 0.1);

padding: 1rem 1.5rem;
margin:3rem 0;
`
const StyledQtyTitle = styled.h5`
    font-size:${({theme})=>theme.fontSize.medium.desktop};
    @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size:${({theme})=>theme.fontSize.medium.mobile};

}
`
const StyledQtyCounter = styled.div`
    display: flex;
align-items: center;
    
`
const StyledQtyBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 0.7rem ;
border-radius:${({theme})=>theme.borderRadius.circle};
    aspect-ratio: 1;
    background:${({theme})=>theme.color.primary};
    transition: 0.2s ease-out;

    & svg{
     color:${({theme})=>theme.color.secondary};
    width:1.1rem;
     stroke-width:4px;
    }
    &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
`
const StyledCurrentQty = styled.p`
    font-size:${({theme})=>theme.fontSize.medium.desktop};
    font-weight:${({theme})=>theme.fontWeight.medium};
    margin:0 1rem;
`
const StyledAddToCartBtn= styled.button`
width:50%;
display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  gap: 1.5rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  transition: 0.2s ease-out;
margin-bottom:1rem;
  & svg{
    width: 2rem;
    stroke-width: 2px;
  }
  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }

`
const StyledProductSize = styled.div`
    background: rgba(76, 175, 80, 0.1);
    width: 75%;
    height:5rem;
    padding: 1rem 1.5rem;
font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
font-weight: ${({ theme }) => theme.fontWeight.medium}; 
`
const StyledProductDescription = styled.div`
    width: 75%;


box-shadow:inset 0 6.4px 40px rgba(75, 35, 94, 0.1);

padding: 1rem 1.5rem;
font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
font-weight: ${({ theme }) => theme.fontWeight.medium}; 
`
const ProductPage = () => {
    const {productId}=useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(productId != "9bef33df-a3e4-4fda-b719-75dcdff5664a"){
            navigate("/store")
        }

    },[])
  return (
    <StyledPageWrapper>
        <ProductBreadCrumbs/>
        <StyledProductWrapper>
        <StyledImgContainer>
            <img src={AmaranthImg}/>
        </StyledImgContainer>
        <StyledProductDetails>
            <StyledTitle>
                Amaranth
            </StyledTitle>
            <StyledPrice>
            &#8364;10.50
            </StyledPrice>
            <StyledQtyContainer>
            <StyledQtyTitle>
            Quantity
            </StyledQtyTitle>
            <StyledQtyCounter>

            <StyledQtyBtn><MinusIcon/></StyledQtyBtn>
            <StyledCurrentQty>1</StyledCurrentQty>
            <StyledQtyBtn><PlusIcon/></StyledQtyBtn>
            </StyledQtyCounter>
            </StyledQtyContainer>
            <StyledAddToCartBtn><ShoppingCartIcon/>Add to Cart</StyledAddToCartBtn>
            <StyledProductSize>
                <h5>Pot Size</h5>
                <p>12 X 15 CM</p>
            </StyledProductSize>
            <StyledProductDescription>
                <p>With a mild flavour reminiscent of red beet or spinach, this herb offers a delicious taste that beautifully complements a wide array of dishes.</p>
            </StyledProductDescription>
        </StyledProductDetails>
        </StyledProductWrapper>
    </StyledPageWrapper>
  )
}

export default ProductPage