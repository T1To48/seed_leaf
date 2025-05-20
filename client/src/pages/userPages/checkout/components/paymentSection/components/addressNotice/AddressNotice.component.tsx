import { StyledAddressNotice } from "./addressNotice.styles";

const AddressNotice = () => {
  return (
    <StyledAddressNotice>
      <p>
        Delivery will be made to the address saved in your account details.
        Please ensure your address is up to date before completing your
        purchase.
      </p>
    </StyledAddressNotice>
  );
};

export default AddressNotice;
