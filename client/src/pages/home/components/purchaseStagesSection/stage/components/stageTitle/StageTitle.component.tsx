import { FCWithChildren } from "src/types";
import styled from "styled-components";
const StyledStageTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    width: 8rem;
    text-align: center;
  }
`;
const StageTitle = ({ children }: FCWithChildren) => {
  return <StyledStageTitle>{children}</StyledStageTitle>;
};

export default StageTitle;
