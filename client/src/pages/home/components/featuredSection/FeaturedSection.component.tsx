import { StyledFeaturedSection } from "./featuredSection.styles";
import Carousel from "./carousel/Carousel.component";
import FeaturedParagraph from "./featuredParagraph/FeaturedParagraph.component";
const FeaturedSection = () => {
  return (
    <StyledFeaturedSection>
      <FeaturedParagraph />
      <Carousel />
    </StyledFeaturedSection>
  );
};

export default FeaturedSection;
