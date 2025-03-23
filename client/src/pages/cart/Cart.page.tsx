import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import { ProductRow } from "./components";
import { useAppSelector } from "src/redux";
const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 20rem auto 0;
  min-height: 70vh;
  
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
  margin:18rem 0 5rem 0; 
  /* min-height: 90vh; */

  }
`
const StyledHeader = styled.header`
display: flex;
align-items: end;
justify-content: space-between;
padding: 0 3rem;

@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
display: block;

}
`;
const StyledCartTitle = styled.h1`
font-size: ${({theme})=>theme.fontSize.giant};
color: ${({theme})=>theme.color.text};
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
font-size: ${({theme})=>theme.fontSize.xxLarge.mobile};
text-align:left;
margin-bottom: 1rem;
}
`
const StyledLink = styled(Link)`
font-size: ${({theme})=>theme.fontSize.medium.desktop};
font-weight: ${({theme})=>theme.fontWeight.medium};
text-decoration:underline;
letter-spacing: 1px;
color: ${({theme})=>theme.color.text};
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
display: block;
font-size: ${({theme})=>theme.fontSize.medium.mobile};
letter-spacing: normal;
text-align:right;
}
`;
const StyledProductsTable = styled.table`

width:80%;
margin:4rem auto 8rem;
border-collapse: collapse;
&  thead{
    border-bottom:1px  solid ${({theme})=>theme.color.accent} ;
}

& th:first-child{
    text-align:left;

}
& th:nth-child(2){

}
& th:last-child{
    text-align:right;
}
& th{
font-size: ${({theme})=>theme.fontSize.small.desktop};
font-weight: ${({theme})=>theme.fontWeight.semiBold};
padding-bottom:1rem ;

}
& td{
width:30%;
}

@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
width:90%;
& th:first-child{
    padding-left:2rem

}
& th:last-child{
    text-align:center;
}
}
`;
const StyledCheckoutContainer = styled.div`
display: flex;
justify-content: end;
height: 20rem;
width: 90%;
gap:7rem;
& textarea{
    width: 20vw;
    min-width: 25rem;
    height: 11rem;
    min-height: 5rem;
    outline: none;
    border-radius: ${({theme})=>theme.borderRadius.small};
    padding: 1rem;
    max-height: 20rem;
    resize: vertical;
    font-size: ${({theme})=>theme.fontSize.small.desktop};
    color:${({theme})=>theme.color.text};
    &:focus{
      border: 2px solid ${({ theme }) => theme.color.primary};;
    }
    }
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
flex-direction: column;
justify-content: center;
align-items: center;
gap:0;
width: 100%;
height: 28rem;
& textarea{
resize: none;
width: 70%;
height:100%;
}
}
`;
const StyledCheckout = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:3rem;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
    /* gap:1rem; */
    margin: 2rem 0;
}
`;

const StyledCartTotal = styled.div`
display: flex;
gap: 15vw;

font-size: ${({theme})=>theme.fontSize.medium.desktop};
font-weight: ${({theme})=>theme.fontWeight.normal};
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
gap:0;
width:70%;
justify-content: space-between;
}
`;
const StyledCheckoutBtn = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;
  padding:  1.2rem;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 100%;
  gap: 1rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  margin-top: 1rem;
  transition: 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  padding: 1rem 0;
  width:70%;
  }

`;
const Cart = () => {
    const navigate =useNavigate()
    const {isMobile}=useAppSelector((state)=>state.ui)
  return (
    <StyledPageWrapper>
        <StyledHeader>
            <StyledCartTitle>Shopping Cart</StyledCartTitle>
            <StyledLink to="/store">Continue Shopping</StyledLink>
        </StyledHeader>
        <StyledProductsTable>
            <thead>

            <tr>
               <th>PRODUCT</th> 
              { !isMobile &&<th>QUANTITY</th> }
               <th>SUBTOTAL</th> 
            </tr>
            </thead>
            <tbody>
            <ProductRow isMobile={isMobile}/>
            <ProductRow isMobile={isMobile}/>
            </tbody>
        </StyledProductsTable>
        <StyledCheckoutContainer>
        <textarea placeholder="Special Order Instructions" maxLength={255}/>
        <StyledCheckout>
            <StyledCartTotal>
                <p>Total</p>
                <p>&#8364;10.50</p>
            </StyledCartTotal>
            <StyledCheckoutBtn onClick={()=>navigate("/user/checkout")}>Checkout</StyledCheckoutBtn>
        </StyledCheckout>
        </StyledCheckoutContainer>
    </StyledPageWrapper>
  )
}

export default Cart;