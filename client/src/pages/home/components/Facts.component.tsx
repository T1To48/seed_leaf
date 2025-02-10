import styled from "styled-components"
import factsImg from "src/assets/facts_section.png"
import logoImg from "src/assets/logo_no_bg.png"
const StyledFactsSection = styled.section`
  width: 100%;
  height: 30rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    /* height: 40rem; */
  }

  position: relative;
  display: flex;
  justify-content: center;
  &::before{
    content:"";
position:absolute;

    background: rgba(255, 255, 255,0.4);
    z-index: 5;
    width:100%;
    height: 100%;
    top: 0;
    left:0;
  }
`;

const StyledFactsContainer = styled.div`
/* position:absolute; */
z-index: 10;
width: 100%;
height: 100%;
  
`
const StyleFactsBgImg = styled.img`
top:0;
left: 0;
position:absolute;
width: 100%;
height: 30rem;
/* height: 100%; */
object-fit: cover;
`
const StyledFact=styled.div`
  
`

const StyledFactLogo=styled.img`
  
`

const StyledFactTitle=styled.h3`
  
`
const StyledFactText=styled.h5`
  
`
const Facts = () => {
  return (
    <StyledFactsSection>
        <StyleFactsBgImg src={factsImg}/>
      <StyledFactsContainer>

        <StyledFact>
          <StyledFactLogo src={logoImg}/>
          <StyledFactTitle>
          Guranteed Consistency
          </StyledFactTitle>
          <StyledFactText>
            We deliver fresh microgreens to you on a regular basis,
            making it quick easy to enrich your meals with essential
            nutrients and vitamins.
          </StyledFactText>
        </StyledFact>
      </StyledFactsContainer>
    </StyledFactsSection>
  )
}

export default Facts