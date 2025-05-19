import type { Categories } from "src/types";
import { StyledCheckboxWrapper } from "./categoryCheckbox.styles";
import { CheckboxIcon, CheckboxInput, CheckboxLabel } from "./components";

const CategoryCheckbox = ({ category,onClick }: { category: Categories,onClick:()=>void }) => {
  return (
    <StyledCheckboxWrapper onClick={onClick}>
      <CheckboxInput category={category} />
      <CheckboxLabel category={category} />
      <CheckboxIcon />
    </StyledCheckboxWrapper>
  );
};

export default CategoryCheckbox;
