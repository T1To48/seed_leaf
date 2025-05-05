import { AuthInputsInfo } from "src/types";
import Input from "./Input.component";
import { ChangeEventHandlerInput } from "src/types/global.types";
const InputsList = ({
  inputsArr,
  userData,
  handleChange,
}: {
  inputsArr: AuthInputsInfo[];
  userData: {
    email: string;
    password: string;
    firstName?:string;
    lastName?:string;
    address?:string;
  };
  handleChange: ChangeEventHandlerInput;
}) => {
  return (
    <>
      {inputsArr.map((input) => {
        const { type, label,field } = input;
        const value = userData[field];
        return (
          <Input
            type={type}
            value={value??""}
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
