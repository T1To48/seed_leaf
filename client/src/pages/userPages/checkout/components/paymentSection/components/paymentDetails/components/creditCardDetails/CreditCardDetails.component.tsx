import { useCallback, useState } from "react";
import { StyledCreditCardDetails } from "./creditCardDetails.styles";
import { Input, DualInputsWrapper } from "./components";
import type { ChangeEventInput } from "src/types/global.types";
const CreditCardDetails = () => {
  const [{ cardNumber, expiryDate, cvv, nameOnCard }, setCardDetails] =
    useState({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      nameOnCard: "",
    });

  const handleChange = useCallback((e: ChangeEventInput) => {
    const { name, value } = e.target;
    setCardDetails((preVal) => ({
      ...preVal,
      [name]: value,
    }));
  }, []);

  return (
    <StyledCreditCardDetails>
      <Input
        value={cardNumber}
        label="Card Number"
        name="cardNumber"
        onChange={handleChange}
      />

      <DualInputsWrapper>
        <Input
          value={expiryDate}
          label="Expiry Date (MM / YY)"
          name="expiryDate"
          onChange={handleChange}
        />
        <Input
          value={cvv}
          label="Security Code"
          name="cvv"
          onChange={handleChange}
        />
      </DualInputsWrapper>

      <Input
        value={nameOnCard}
        label="Name On Card"
        name="nameOnCard"
        onChange={handleChange}
      />
    </StyledCreditCardDetails>
  );
};

export default CreditCardDetails;
