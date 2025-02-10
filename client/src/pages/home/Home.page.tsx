import styled from "styled-components";
import heroImg from "src/assets/hero-img.png";
import Carousel from "./components/Carousel.component";
import CarouselSide from "./components/CarouselSide.component";
const StyledPageWrapper = styled.main`
  width: 100%;
  margin-top: 5rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  margin-top: 8rem;

  }
`;

const StyledSection = styled.section`
  width: 100%;
  height: 70rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: 40rem;
  }
`;
const StyledHeroSection = styled(StyledSection)`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;
const StyledImg = styled.img`
  position: absolute;
  width: inherit;
  height: inherit;
  object-fit: cover;
  box-shadow: 0px 15px 15px rgba(200, 200, 200, 0.4);

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    /* height:37.2rem; */
    object-fit: cover;
  }
`;
const StyledHeroContainer = styled.div`
  position: absolute;
  /* text-align: center; */
  margin-top: 20rem;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    margin-top: 8rem;
  }
`;

const StyledHeroTitle = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.giant};
  font-weight: ${({ theme }) => theme.fontWeight.maxBold};
  letter-spacing: 3px;
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.xxLarge.mobile};
  }

`;

const StyledHeroText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.maxBold};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 3rem;
  & > *{
    border-radius:${({ theme }) => theme.borderRadius.small};
    padding:0rem 1rem;


  }
  & > :first-child {
    transform: perspective(500px) rotateY(-30deg) skew(-5deg);
    letter-spacing: 3px;
    background: linear-gradient(290deg, #ffffff, rgba(209, 209, 209,0.4));
    box-shadow: -20px 0px 30px rgba(209, 209, 209,0.5);
  }
  & > :nth-child(2) {
    font-size: 3rem;
    letter-spacing: 1px;
  }
  & > :last-child {
    transform: perspective(500px) rotateY(30deg) skew(5deg);
    letter-spacing: 3px;
    background: linear-gradient(-290deg,  #ffffff, rgba(209, 209, 209,0.4));
    box-shadow: 20px 0px 30px rgba(209, 209, 209,0.5);
  }

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.large.mobile};
    gap: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.maxBold};
    & > * {
    width: 28vw;
      padding:0;
    }
    & > :nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.large.mobile};
      /* width: 30vw; */
      white-space: nowrap;
      align-self: flex-start;

    }
  }
`;

const StyledHeroBtnsContainer = styled.div`
  display: flex;
  justify-content: center;
    align-items: center;
  height: 10rem;
  text-align: center;
  gap:8rem;
width:100%;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  flex-direction: column-reverse;
  gap: 2rem;
  height: 15rem;
}

`;
const StyledHeroBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  color: ${({ theme }) => theme.color.secondary};
  
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  background-color: ${({ theme }) => theme.color.accent};
  padding: 1.2rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  letter-spacing: 1px;
  box-shadow: inset 0px 8px 8px rgba(255, 255, 255, 0.4),
    inset 0px 8px 12px rgba(218, 241, 218, 0.2);
  transition: 0.2s ease-out;
  width: 20rem;
  &:hover {
    box-shadow: inset 0px 15px 15px rgba(255, 255, 255, 0.1),
      inset 6px 0px 12px rgba(218, 241, 218, 0.1),
      inset -6px 0px 12px rgba(218, 241, 218, 0.1);
  }


  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  letter-spacing: normal;
  font-size: calc(${({ theme }) => theme.fontSize.medium.mobile} - 0rem);
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: fit-content;


  }

`;
const StyledCarouselSection=styled.section`
display: flex;
/* align-items: center; */
justify-content: center;
gap: 3vw;
padding: 0 2rem;
margin-top: 5rem;
width: 100%;
@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
margin-top: 0rem;
gap: 0px;
display: block;
}
`
const Home = () => {
  return (
    <StyledPageWrapper>
      <StyledHeroSection >
        <StyledImg src={heroImg} />

        <StyledHeroContainer>
          <StyledHeroTitle>Fresh Nutrient Rich Microgreens</StyledHeroTitle>
          <StyledHeroText>
            <p>very Micro</p>
            <p> very Tasty </p>
            <p>very Healthy</p>
          </StyledHeroText>

          <StyledHeroBtnsContainer>
            <StyledHeroBtn> Explore Products</StyledHeroBtn>
            <StyledHeroBtn>Our Vision</StyledHeroBtn>
          </StyledHeroBtnsContainer>
        </StyledHeroContainer>
      </StyledHeroSection>
      <StyledCarouselSection>
      <CarouselSide/>
        <Carousel/>
      </StyledCarouselSection>
    </StyledPageWrapper>
  );
};

export default Home;
