import styled from "styled-components";
import type { SortMethods } from "src/types";

export const StyledOptionLabel = styled.label.attrs<{
  $sortOption: SortMethods;
}>((props) => ({
  htmlFor: props.$sortOption,
}))`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
