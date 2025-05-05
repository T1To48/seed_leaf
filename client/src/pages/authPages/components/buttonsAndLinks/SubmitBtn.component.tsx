import type { SubmitBtnTypes } from "src/types";
import { StyledBtn } from "./submitBtn.styles";
const SubmitBtn = ({ btnText }: SubmitBtnTypes) => {
  return <StyledBtn type="submit">{btnText}</StyledBtn>;
};

export default SubmitBtn;
