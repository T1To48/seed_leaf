import styled from "styled-components";

export const StyledCreditCardDetails = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 90%;
  }
`;