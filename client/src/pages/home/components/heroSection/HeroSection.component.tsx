import { StyledHeroWrapper, StyledHeroContainer } from "./heroSection.styles";
import { Title, Text, Buttons, BackgroundImg } from "./components";

const HeroSection = () => {
  return (
    <StyledHeroWrapper>
      <BackgroundImg />
      <StyledHeroContainer>
        <Title />
        <Text />
        <Buttons />
      </StyledHeroContainer>
    </StyledHeroWrapper>
  );
};

export default HeroSection;
