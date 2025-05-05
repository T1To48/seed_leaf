import Input from "./Input.component";
import type { InputsListProps } from "src/types";
const InputsList = ({ inputsArr, userData, handleChange }: InputsListProps) => {
  return (
    <>
      {inputsArr.map((input) => {
        const { type, label, field } = input;
        const value = userData[field];
        return (
          <Input
            type={type}
            value={value ?? ""}
            label={label}
            name={field}
            onChange={handleChange}
          />
        );
      })}
    </>
  );
};

export default InputsList;
