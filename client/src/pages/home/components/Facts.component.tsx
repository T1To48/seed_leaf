import styled from "styled-components"
import factsBgImg from "src/assets/facts_section.png"

import logoImg from "src/assets/logo_green_no_bg.png"
const StyledFactsSection = styled.section`
  width: 100%;
  height: 50rem;
  

  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 0px 15px 15px rgba(200, 200, 200, 0.3);
  

  &::before{
    content:"";
    position:absolute;
    background: rgba(180, 180, 180,0.3);
    z-index: 5;
    width:100%;
    height: 100%;
    top: 0;
    left:0;
  }
  
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: 110rem;

  }
`;
const StyleFactsBgImg = styled.img`
top:0;
left: 0;
position:absolute;
width: 100%;
height: 100%;
object-fit: cover;

`
const StyledFactsContainer = styled.div`
/* position:absolute; */
z-index: 10;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
gap:10vw;
padding: 0 2rem;


& >:nth-child(2){
transform: scale(1.2);

}
@media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  flex-direction: column;

  & >:nth-child(2){
transform: scale(1);
}

  }
  
`

const StyledFact=styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:center;
gap:1rem;
width: 30rem;
aspect-ratio: 16/16;
padding: 1rem;
padding-top: 2rem;
color:${({theme})=>theme.color.text};
background-color: rgba(255,255,255,0.9);
border-radius:${({theme})=>theme.borderRadius.small};
box-shadow:0 0.5rem 2rem rgba(0, 0, 0, 0.5);
`

const StyledFactLogo=styled.img`
width: 6rem;
padding: 1rem;
padding-right:0.3rem;
background: none;
border-radius:${({theme})=>theme.borderRadius.medium};
box-shadow:0 0.4rem 1.2rem rgba(0, 0, 0, 0.10);
  
`

const StyledFactTitle=styled.h3`
  font-size:${({theme})=>theme.fontSize.large.desktop};
letter-spacing: 1px;
`
const StyledFactText=styled.h5`
    font-size:${({theme})=>theme.fontSize.medium.desktop};
    font-weight:${({theme})=>theme.fontWeight.normal};
    
    padding: 0 3rem;
  
`
const Facts = () => {
  return (
    <StyledFactsSection>
        <StyleFactsBgImg src={factsBgImg}/>
      <StyledFactsContainer>

        <StyledFact>
          <StyledFactLogo src={logoImg}/>
          <StyledFactTitle>
          All Year Round
          </StyledFactTitle>
          <StyledFactText>
          Grown indoors, 
          our microgreens maintain the same fresh taste, quality, 
          and nutrients all year round.
          </StyledFactText>
        </StyledFact>

        <StyledFact>
          <StyledFactLogo src={logoImg}/>
          <StyledFactTitle>
          Locally Grown
          </StyledFactTitle>
          <StyledFactText>
          Our microgreens are cultivated with care, 
          bringing fresh, natural flavors straight to your table.
           
          </StyledFactText>
        </StyledFact>
        <StyledFact>
          <StyledFactLogo src={logoImg}/>
          <StyledFactTitle>
          Pure & Natural
          </StyledFactTitle>
          <StyledFactText>
          Our microgreens are grown in an organic,
           eco-friendly environment, ensuring maximum freshness and vitality.
          </StyledFactText>
        </StyledFact>
      </StyledFactsContainer>
    </StyledFactsSection>
  )
}

export default Facts