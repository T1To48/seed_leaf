import styled from "styled-components"
import logo from "src/assets/logo_white_no_bg.png"
import logoString from "/logoString.png"

import facebookIcon from "src/assets/footer_facebook_icon.svg"
import instagramIcon from "src/assets/footer_instagram_icon.svg"
import tiktokIcon from "src/assets/footer_tiktok_icon.svg"
import youtubeIcon from "src/assets/footer_youtube_icon.svg"

import bioIcon from "src/assets/footer_bio_icon.jpg"
import veganIcon from "src/assets/footer_vegan_icon.png"

import visaIcon from "src/assets/footer_visa_icon.svg"
import mastercardIcon from "src/assets/footer_mastercard_icon.svg"
import amexIcon from "src/assets/footer_amex_icon.svg"

const StyledFooter = styled.footer`
background: ${({theme})=>theme.color.primary};
border-top:10px solid  ${({theme})=>theme.color.accent};
`
const StyledFooterGridContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr 1fr;
grid-template-rows:1fr 1fr 0.3fr;
align-items: center;
justify-items: center;
padding: 3rem 0;
row-gap: 2rem;

@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
grid-template-columns:1fr;
grid-template-rows:auto;
row-gap: 4rem;
}
`

const StyledFooterLogoWrapper = styled.div`
    grid-column:1 / span 2;
    grid-row:span 1;
    width: 32rem;
    & > img:first-child{
        width:9rem;
    }
    & > img:nth-child(2){
        width:10rem;
        margin-bottom: 8px;
        margin-left: -6px;
    }
    @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
        grid-column: span 1;
        grid-row: 1 / span 2;
        width: initial;
    }
`

const StyledBioVeganIconswrapper = styled.div`
     grid-column: 4 / span 2;
     grid-row: 1 / span 1;
     display: flex;
    gap:4rem;
     & img:first-child{
         width:7.2rem;
        }
        & img:last-child{
            width:20rem;
            border-radius:${({theme})=>theme.borderRadius.small};
     }
     @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
        grid-column: span 1;
        grid-row:7 / span 1;
}
`

const StyledPagesLinks = styled.div`
    grid-column: 3 / span 1;
    grid-row: 1 / span 3;

    display: flex ;
    flex-direction: column;
    justify-content: center;
    gap:2rem;
    text-align:center;
    letter-spacing: 1px;
    font-size:${({theme})=>theme.fontSize.small.desktop};
    font-weight:${({theme})=>theme.fontWeight.semiBold};
    width: 100%;
    height: 100%;
    & a{
        margin: 0 auto;
        width: 30%;
        color:${({theme})=>theme.color.secondary};
        padding: 4px 0;
     }
     @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
        grid-column: span 1;
        grid-row:4 / span 3;
        font-size:${({theme})=>theme.fontSize.medium.mobile};
        letter-spacing: 2px;
        & a{

        border-bottom: 1px solid ${({theme})=>theme.color.secondary};
        /* width: 40%; */

        }
}
`


const StyledContactLinks = styled.div`
    grid-column: 1 / span 2;
    grid-row: 2 / span 2;
    color:${({theme})=>theme.color.secondary};
    & h4{
        font-size:${({theme})=>theme.fontSize.large.desktop};
        padding-bottom:1rem;
    }
    & p{
        font-size:${({theme})=>theme.fontSize.small.desktop};
        font-weight:${({theme})=>theme.fontWeight.semiBold};
        letter-spacing: 1px;
    }

@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    grid-column: span 1;
    grid-row: 3 / span 1;
    text-align: center;
    & h4{
    font-size:${({theme})=>theme.fontSize.xLarge.mobile};
    }
    & p{
        line-height: 2.2rem;
        font-size:${({theme})=>theme.fontSize.medium.mobile};
    }
}
`

const StyledSocialLinks = styled.div`
    grid-column: 4 / span 2;
    grid-row: 2 / span 1;
    & h4{
        color:${({theme})=>theme.color.secondary};
        font-size:${({theme})=>theme.fontSize.medium.desktop};
        padding-bottom:1.2rem;
    }

    & div{
        display: flex;
        justify-content: center;
        gap: 2rem;
    }
    @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
        grid-column: span 1;
        grid-row: 8 / span 1;
    }
`

const StyledPaymentMethods= styled.div`
    grid-column: 4 / span 2;
    grid-row: 3 / span 1;
    display: flex;
    gap:1rem;
    padding-left: 1rem;
    & img{
        width:3rem;
        border-radius:${({theme})=>theme.borderRadius.small} ;
    }
    @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
        grid-column: span 1;
        grid-row: 9 / span 1;
}
`


const StyledMiniIcon = styled.img`
    width:2.5rem;
`

const StyledCopyrightsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    background: linear-gradient(to right, ${({theme})=>theme.color.primary}, #71c174, ${({theme})=>theme.color.primary});
    height:5rem;
    border-top:1px solid  ${({theme})=>theme.color.accent};
    @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
   
        height:7rem;
    }
`
const StyledCopyrightsWrapper = styled.div`
padding: 0 2rem;
    color:${({theme})=>theme.color.secondary} ;
    font-size:${({theme})=>theme.fontSize.small.desktop} ;
    font-weight: ${({theme})=>theme.fontWeight.semiBold};
    &::first-letter{
        font-size:1.5rem;
        font-weight: ${({theme})=>theme.fontWeight.bold};
        color:black;
    }
    & span{
        font-family: "Permanent Marker","Open Sans", sans-serif;
        font-size:${({theme})=>theme.fontSize.medium.desktop} ;
        font-weight: ${({theme})=>theme.fontWeight.maxBold};
        color:#006600;
        letter-spacing: 2px;
    }
     @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
        font-size:${({theme})=>theme.fontSize.small.mobile} ;
        & span{
            letter-spacing: 1px;
            font-size:${({theme})=>theme.fontSize.medium.mobile} ;
        }
     }
     `

const Footer = () => {
  return (
    <StyledFooter>
        <StyledFooterGridContainer>
            <StyledFooterLogoWrapper>
                <img  src={logo}  alt=""/>
                <img src={logoString}  alt="Seed & Leaf"/>
            </StyledFooterLogoWrapper>

            <StyledContactLinks>
                <h4>Reach us at:</h4>
                <p>+1234567890</p>
                <p>EMAIL@address.com</p>
                <p>my street 3, 23345 lisbon portugal</p>
            </StyledContactLinks>

            

            <StyledPagesLinks>
                <a href="https://www.google.com">HOME</a>
                <a href="https://www.google.com">STORE</a>
                <a href="https://www.google.com">CONCEPT</a>
                <a href="https://www.google.com">GALLERY</a>
            </StyledPagesLinks>
      
            <StyledBioVeganIconswrapper>
                <img src={veganIcon}  alt="BIO ICON"/>
                <img src={bioIcon}  alt="BIO ICON"/>
            </StyledBioVeganIconswrapper>

            <StyledSocialLinks>
                <h4>We Are Where You Are:</h4>
                <div>
                <a><StyledMiniIcon src ={facebookIcon}/></a>
                <a><StyledMiniIcon src ={instagramIcon}/></a>
                <a><StyledMiniIcon src ={tiktokIcon}/></a>
                <a><StyledMiniIcon src ={youtubeIcon}/></a>
                </div>
            </StyledSocialLinks>

            <StyledPaymentMethods>
                <img src ={visaIcon}/>
                <img src ={mastercardIcon}/>
                <img src ={amexIcon}/>
            </StyledPaymentMethods>

          

        </StyledFooterGridContainer>
        <StyledCopyrightsContainer>
            <StyledCopyrightsWrapper>
        © 2025 Seed & Leaf, designed and developed by <span>Tawfiq Zayyad</span>
            </StyledCopyrightsWrapper>
        </StyledCopyrightsContainer>
    </StyledFooter>
  )
}

export default Footer