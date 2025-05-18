import type { SortMethods } from "src/types";
import { OptionInput, OptionLabel, OptionBtn } from "./components";
import { StyledOptionWrapper } from "./sortOptionItem.styles";
const SortOptionItem = ({
  handleCurrentSort,
  sortOptionDetails,
  checked,
}: {
  handleCurrentSort: (sortOption: SortMethods) => void;
  sortOptionDetails: { id: SortMethods; text: string };
  checked: boolean;
}) => {
  const { id, text } = sortOptionDetails;
  return (
    <StyledOptionWrapper>
      <OptionInput
        onChange={handleCurrentSort}
        sortOption={id}
        checked={checked}
      />
      <OptionLabel sortOption={id} text={text} />
      <OptionBtn />
    </StyledOptionWrapper>
  );
};

export default SortOptionItem;
