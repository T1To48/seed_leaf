import type { FormProps } from "src/types";

import { StyledFormWrapper, StyledFormTitle, StyledForm } from "./form.styles";

const Form = ({ children,title }:FormProps ) => {
  return (
  <StyledFormWrapper>
    <StyledFormTitle>{title.toUpperCase()}</StyledFormTitle>
    <StyledForm>
    {children}
    </StyledForm>

    </StyledFormWrapper>
);
};

export default Form;
