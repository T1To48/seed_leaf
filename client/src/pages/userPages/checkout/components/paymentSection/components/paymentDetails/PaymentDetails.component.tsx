import { StyledPaymentDetailsWrapper } from "./paymentDetails.styles";
import { CreditCardDetails, PayBtn, PaymentTitle } from "./components";
const PaymentDetails = () => {
  return (
    <StyledPaymentDetailsWrapper>
      <PaymentTitle />
      <CreditCardDetails />
      <PayBtn/>
    </StyledPaymentDetailsWrapper>
  );
};

export default PaymentDetails;
