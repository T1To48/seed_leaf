import { FCWithChildren } from "src/types";
import {
  StyledContainer,
  StyledFilterTitle,
  StyledCheckboxesWrapper,
} from "./categoriesContainer.styles";

const CategoriesContainer = ({ children }: FCWithChildren) => {
  return (
    <StyledContainer>
      <StyledFilterTitle>Category:</StyledFilterTitle>
      <StyledCheckboxesWrapper>{children}</StyledCheckboxesWrapper>
    </StyledContainer>
  );
};

export default CategoriesContainer;
