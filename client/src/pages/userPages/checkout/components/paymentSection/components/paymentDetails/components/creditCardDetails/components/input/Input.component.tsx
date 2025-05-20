import type { ChangeEventHandlerInput } from "src/types/global.types";
import { InputWrapper, InputBox, InputLabel } from "./components";

const Input = ({
  value,
  label,
  name,
  onChange,
}: {
  value: string;
  label:string;
  name: string;
  onChange: ChangeEventHandlerInput;
}) => {
  return (
    <InputWrapper>
      <InputBox name={name}  value={value} onChange={onChange} />
      <InputLabel>{label}</InputLabel>
    </InputWrapper>
  );
};

export default Input;
