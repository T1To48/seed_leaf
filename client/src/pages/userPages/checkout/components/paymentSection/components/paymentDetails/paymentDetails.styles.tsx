import styled from "styled-components";

export const StyledPaymentDetailsWrapper = styled.div`
  box-shadow: 0 8px 30px ${({ theme }) => theme.color.secondaryGreen(0.1)},
    0 -8px 30px ${({ theme }) => theme.color.secondaryGreen(0.1)};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 4rem 0;
  height: 40rem;
`;
