import {
  ChangeEventHandlerInput,
  FCWithChildrenAndProps,
} from "./global.types";

type title = "Login" | "Register";
type InputTypeAttr = "email" | "password" | "text";
type FormProps = FCWithChildrenAndProps<{ title: title }>;

interface InputProps {
  type: InputTypeAttr;
  value: string;
  label: string;
  name: string;
  onChange: ChangeEventHandlerInput;
}

interface InputsListProps {
  inputsArr: AuthInputsInfo[];
  userData: {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
    address?: string;
  };
  handleChange: ChangeEventHandlerInput;
}
interface AuthInputsInfo {
  type: InputTypeAttr;
  label: string;
  field: "email" | "password" | "firstName" | "lastName" | "address";
}
interface SubmitBtnTypes {
  btnText: title;
}
export type {
  FormProps,
  InputProps,
  InputsListProps,
  AuthInputsInfo,
  SubmitBtnTypes,
};
