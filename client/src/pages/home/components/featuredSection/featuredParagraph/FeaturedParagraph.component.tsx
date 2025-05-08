import { ChevronRightIcon } from "@heroicons/react/24/outline";
import {
  StyledParagraphWrapper,
  StyledPreTitle,
  StyledTitle,
  StyledText,
  StyledStoreLink,
} from "./featuredParagraph.styles";
const FeaturedParagraph = () => {
  return (
    <StyledParagraphWrapper>
      <StyledPreTitle>CHECK OUR</StyledPreTitle>
      <StyledTitle>FEATURED PRODUCTS</StyledTitle>
      <StyledText>
        Discover the power of nature's finest ingredients from fresh Microgreens
        to dry Herbs & Oils
      </StyledText>
      <StyledStoreLink to="/store">
        VISIT STORE
        <ChevronRightIcon />
      </StyledStoreLink>
    </StyledParagraphWrapper>
  );
};

export default FeaturedParagraph;
