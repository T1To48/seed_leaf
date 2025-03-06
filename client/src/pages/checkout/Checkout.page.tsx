import styled from "styled-components"
import AmaranthImg from "src/assets/Amaranth.jpg"
const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 25rem auto 0;
  min-height: 60vh;
  
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
  margin:18rem 0 10rem 0; 
  min-height: 90vh;

  }
`
const StyledCheckoutSection=styled.section`

display: flex;
justify-content: center;
width: 100%;
min-height:65vh;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    position: relative;
    flex-direction: column;
gap: 4rem;
}
`;
const StyledForm=styled.form``
const StyledSide = styled.div`

`;
const StyledLeftSide = styled(StyledSide)`
width:50%;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width:100%;

}
`
const StyledTitle=styled.div`

margin: 0 auto;
width: 80%;
    & h1{
    font-size:${({theme})=>theme.fontSize.large.desktop};
}
& p{
    font-size:${({theme})=>theme.fontSize.xSmall.desktop};


}
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 90%;
    
}
`
const StyledPayment = styled.div`


`
const StyledCreditCardContent = styled.div`
width:80%;
margin:0 auto;
margin-top: 2rem;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 90%;
    
}
`

const StyledInputWrapper = styled.div`
position:relative;
margin-bottom: 2rem;

& svg{
    position:absolute;
    top:1.3rem;
    right:1rem;
    width:2.2rem;
    stroke-width: 2px;
    color:${({theme})=>theme.color.accent};
}
`
const StyledInput = styled.input`
position:relative;
background:none;
z-index:10;
width:100%;
padding: 1rem;
border-radius:${({theme})=>theme.borderRadius.small};
outline:none;
border:1px solid ${({theme})=>theme.color.accent};
font-size:${({theme})=>theme.fontSize.medium.desktop} ;

&:focus ~ label{
top:-0.8rem;
left:1.4rem;
font-size:${({theme})=>theme.fontSize.xSmall.desktop} ;
z-index:10;
}

`
const StyledNamesInputsContainer = styled.div`
   display: flex;
   justify-content: space-between;
   gap:2rem;
   
   & > div{
    width: 100%;
    margin-bottom: 2rem;
   }
 
`
const StyledInputLabel = styled.label`
position:absolute;
z-index:5;
transition:  0.2s ease-in;

top:1.3rem;
left:1rem;
background:${({theme})=>theme.color.background} ;
font-size:${({theme})=>theme.fontSize.small.desktop} ;
`
const StyledBtnWrapper=styled.div`
display:flex ;
justify-content: center;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
position: absolute;
bottom:-10rem;
width: 90%;
margin: 0 2rem;
}
`
const StyledPayBtn = styled.button`
padding: 1rem;
font-size:${({theme})=>theme.fontSize.medium.desktop} ;
border-radius:${({theme})=>theme.borderRadius.small};
width:60%;
border:none;
background:${({theme})=>theme.color.primary};
color:${({theme})=>theme.color.secondary};
font-weight:${({theme})=>theme.fontWeight.semiBold};
transition: 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width:100%;

}
`
const StyledRightSide = styled(StyledSide)`
padding: 1rem 2rem;
width: 40%;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;

}

`
const  StyledOrderOverview = styled.div`

`
const StyledProductsContainer=styled.div`
display: flex;
flex-direction: column;
gap:3rem;
padding: 0 1rem;
 max-height:28vh;
overflow-y: auto;
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-height:33vh;

}
`
const StyledProduct = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height:7rem;
font-size: ${({theme})=>theme.fontSize.small.desktop};
`
const StyledProductContent=styled.div`
display: flex;
align-items: center;

& >div:last-child{
    padding-left:1rem;
}
`
const StyledProductImgWrapper=styled.div`
height:7rem;
width: 8rem;
overflow: hidden;
display: flex;
align-items: end;
justify-content: center;
border:1px solid ${({theme})=>theme.color.accent};
border-radius: ${({theme})=>theme.borderRadius.small};
& img{
    /* height:7rem; */
width: 8rem;
        object-fit: cover;
    

}
`
const StyledTotalPrice =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
margin-top:4rem;
border-top:1px solid ${({theme})=>theme.color.accent};
padding:1rem 1rem 0;
& >div{
    font-size: ${({theme})=>theme.fontSize.medium.desktop};
    font-weight: ${({theme})=>theme.fontWeight.semiBold};
}
& :first-child{
    
    display: flex;
    align-items: center;
    & span{
    font-size: ${({theme})=>theme.fontSize.xSmall.desktop};
    font-weight: ${({theme})=>theme.fontWeight.normal};

        padding-left: 1rem;
    }

}
`
const Checkout = () => {
  return (
    <StyledPageWrapper>
            <StyledForm>

        <StyledCheckoutSection>

            <StyledLeftSide>
                <StyledTitle>
                    <h1>Payment</h1>

                    <p>All transactions are secure and encrypted.</p>
                </StyledTitle>
                <StyledPayment>
                    <StyledCreditCardContent>
                    <StyledInputWrapper>
                <StyledInput />
                <StyledInputLabel>Card Number</StyledInputLabel>
                </StyledInputWrapper>
                
                <StyledNamesInputsContainer>
              <StyledInputWrapper>
                <StyledInput />
                <StyledInputLabel>Expiry Date {"(MM / YY)"}</StyledInputLabel>
                </StyledInputWrapper>
                
                <StyledInputWrapper>
                <StyledInput />
                <StyledInputLabel>Security Code</StyledInputLabel>
                </StyledInputWrapper>
              </StyledNamesInputsContainer>
                <StyledInputWrapper>
                <StyledInput />
                <StyledInputLabel>Name On Card</StyledInputLabel>
                </StyledInputWrapper>
                    </StyledCreditCardContent>
                    <StyledBtnWrapper>
                    <StyledPayBtn>Pay now</StyledPayBtn>
                    </StyledBtnWrapper>
                </StyledPayment>
            </StyledLeftSide>
            <StyledRightSide>
                <StyledOrderOverview>
                    <StyledProductsContainer>
                        <StyledProduct>
                            <StyledProductContent>
                                <StyledProductImgWrapper>

                                    <img src={AmaranthImg}/>
                                </StyledProductImgWrapper>
                            <div>Amaranth</div>
                            </StyledProductContent>

                            <div>€15.00</div>
                        </StyledProduct>
                        

                        <StyledProduct>
                            <StyledProductContent>
                                <StyledProductImgWrapper>

                                    <img src={AmaranthImg}/>
                                </StyledProductImgWrapper>
                            <div>Amaranth</div>
                            </StyledProductContent>

                            <div>€15.00</div>
                        </StyledProduct>
                        
                        <StyledProduct>
                            <StyledProductContent>
                                <StyledProductImgWrapper>

                                    <img src={AmaranthImg}/>
                                </StyledProductImgWrapper>
                            <div>Amaranth</div>
                            </StyledProductContent>

                            <div>€15.00</div>
                        </StyledProduct>
                    </StyledProductsContainer>
                    <StyledTotalPrice>
                        <div>TOTAL <span>{"(2 items)"}</span></div>
                        <div>€245.00</div>
                    </StyledTotalPrice>
                </StyledOrderOverview>
            </StyledRightSide>

        </StyledCheckoutSection>
        </StyledForm>

    </StyledPageWrapper>
  )
}

export default Checkout