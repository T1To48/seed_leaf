import type { SortMethods } from "src/types";
import { StyledOptionInput } from "./optionInput.styles";

const OptionInput = ({
  onChange,
  sortOption,
  checked,
}: {
  onChange: (sortOption: SortMethods) => void;
  sortOption: SortMethods;
  checked: boolean;
}) => {
  return (
    <StyledOptionInput
      onChange={() => onChange(sortOption)}
      $sortOption={sortOption}
      checked={checked}
    />
  );
};

export default OptionInput;
