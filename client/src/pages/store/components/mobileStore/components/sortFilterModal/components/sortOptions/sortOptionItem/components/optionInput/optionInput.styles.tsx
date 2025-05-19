import type { SortMethods } from "src/types";
import styled from "styled-components";

export const StyledOptionInput = styled.input.attrs<{
  $sortOption: SortMethods;
}>((props) => ({
  type: "radio",
  name: "radio",
  id: props.$sortOption,
  value: props.$sortOption,
}))`
  position: absolute;
  z-index: 5;
  top: 0rem;
  left: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  opacity: 0;
  cursor: pointer;

  &:checked ~ div {
    background: ${({ theme }) => theme.color.primary};
    opacity: 1;
    & span {
      opacity: 1;
    }
  }
`;
