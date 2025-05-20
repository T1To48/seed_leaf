import styled from "styled-components";

const StyledTitle = styled.div`
  margin: 0 auto;
  width: 80%;
  & h1 {
    font-size: ${({ theme }) => theme.fontSize.large.desktop};
  }
  & p {
    font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 90%;
  }
`;

const PaymentTitle = () => {
  return (
    <StyledTitle>
      <h1>Payment</h1>
      <p>All transactions are secure and encrypted.</p>
    </StyledTitle>
  );
};

export default PaymentTitle;
