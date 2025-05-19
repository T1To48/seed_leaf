import styled from "styled-components";
import { StyledSectionWrapper } from "../sharedComponents.styles";

export const StyledPaymentSection = styled(StyledSectionWrapper)`
  width: 50%;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
    padding: 0 1rem;
  }
`;
