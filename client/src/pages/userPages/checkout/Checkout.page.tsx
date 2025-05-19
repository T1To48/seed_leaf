import {
  CheckoutPageWrapper,
  PaymentSection,
  OrderOverview,
} from "./components";

const Checkout = () => {
  return (
    <CheckoutPageWrapper>
      <PaymentSection />
      <OrderOverview />
    </CheckoutPageWrapper>
  );
};

export default Checkout;
