import { StyledOptionLabel } from "./optionLabel.styles";
import type { SortMethods } from "src/types";

const OptionLabel = ({
  sortOption,
  text,
}: {
  sortOption: SortMethods;
  text: string;
}) => {
  return <StyledOptionLabel $sortOption={sortOption}>{text}</StyledOptionLabel>;
};

export default OptionLabel;
