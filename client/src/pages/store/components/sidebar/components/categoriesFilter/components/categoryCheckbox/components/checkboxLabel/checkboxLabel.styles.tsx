import styled from "styled-components";
import type { Categories } from "src/types";

export const StyledCheckboxLabel = styled.label.attrs<{
  $category: Categories;
}>((props) => ({ htmlFor: props.$category }))`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  text-transform: capitalize;
`;
