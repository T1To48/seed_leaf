import { StyledPaymentSection } from "./paymentSection.styles";
import { AddressNotice, PaymentDetails } from "./components";

const PaymentSection = () => {
  return (
    <StyledPaymentSection>
      <AddressNotice />
      <PaymentDetails/>
    </StyledPaymentSection>
  );
};

export default PaymentSection;
