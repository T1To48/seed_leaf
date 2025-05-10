import { QuantityBtnProps } from "src/types";
import { StyledQtyBtn } from "./button.styles";

const Button = ({ children,onClick }: QuantityBtnProps) => {
  return <StyledQtyBtn onClick={onClick}>{children}</StyledQtyBtn>;
};

export default Button;
