import type { FormTypes } from "src/types";

import { StyledFormWrapper, StyledFormTitle, StyledForm } from "./form.styles";

const Form = ({ children,title }:FormTypes ) => {
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
