import styled from "styled-components";
import type { Categories } from "src/types";

export const StyledCheckbox = styled.input.attrs<{
  $category: Categories;
}>((props) => ({
  type: "checkbox",
  name: props.$category,
  id: props.$category,
  value: props.$category,
}))`
  position: absolute;
  z-index: 5;
  top: 0.6rem;
  left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  opacity: 0;
  cursor: pointer;

  &:checked ~ div {
    background: ${({ theme }) => theme.color.primary};
    opacity: 1;
    & svg {
      width: 1rem;
      stroke-width: 0.5rem;
      opacity: 1;
      color: black;
    }
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    top: -0.5rem;
    height: 4rem;
    width: 4rem;
    -webkit-tap-highlight-color: transparent;
  }
`;
