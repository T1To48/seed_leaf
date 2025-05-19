import { FCWithChildren } from "src/types";
import {
  StyledPageWrapper,
  StyledForm,
  StyledCheckoutSection,
} from "./checkoutPageWrapper.styles";

const CheckoutPageWrapper = ({ children }: FCWithChildren) => {
  return (
    <StyledPageWrapper>
      <StyledForm>
        <StyledCheckoutSection>{children}</StyledCheckoutSection>
      </StyledForm>
    </StyledPageWrapper>
  );
};

export default CheckoutPageWrapper;
