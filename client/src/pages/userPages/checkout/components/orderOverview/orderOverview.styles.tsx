import styled from "styled-components";
import { StyledSectionWrapper } from "../sharedComponents.styles";
import type { FCWithChildren } from "src/types";

const StyledOrderOverviewSection = styled(StyledSectionWrapper)`
  width: 40%;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const StyledContent = styled.div`
  padding: 4rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  height: 100%;
  box-shadow: 0 8px 30px ${({ theme }) => theme.color.secondaryGreen(0.1)},
    0 -8px 30px ${({ theme }) => theme.color.secondaryGreen(0.1)};
`;

export const StyledOrderOverviewWrapper = ({ children }: FCWithChildren) => {
  return (
    <StyledOrderOverviewSection>
      <StyledContent>{children}</StyledContent>
    </StyledOrderOverviewSection>
  );
};
