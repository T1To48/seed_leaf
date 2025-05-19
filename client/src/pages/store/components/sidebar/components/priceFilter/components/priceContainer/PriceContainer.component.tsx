import type { FCWithChildren } from "src/types";
import {
  StyledContainer,
  StyledFilterTitle,
  StyledPriceFilterWrapper,
} from "./priceContainer.styles";

const PriceContainer = ({ children }: FCWithChildren) => {
  return (
    <StyledContainer>
      <StyledFilterTitle>Price:</StyledFilterTitle>
      <StyledPriceFilterWrapper>{children}</StyledPriceFilterWrapper>
    </StyledContainer>
  );
};

export default PriceContainer;
