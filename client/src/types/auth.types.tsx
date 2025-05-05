import { ChangeEventHandlerInput, FCWithChildrenAndProps } from "./global.types";

type title = "Login" | "Register";
type InputTypeAttr = "email" | "password" | "text";
type FormTypes = FCWithChildrenAndProps<{ title: title }>;

interface InputTypes {
  type: InputTypeAttr;
  value: string;
  label: string;
  name:string;
  onChange: ChangeEventHandlerInput;
}
interface AuthInputsInfo {
  type: InputTypeAttr;
  label: string;
  field:"email"|"password"|"firstName"|"lastName"|"address";
}
interface SubmitBtnTypes {
  btnText: title;
}
export type { FormTypes, InputTypes, AuthInputsInfo, SubmitBtnTypes };
