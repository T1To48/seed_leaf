import styled from "styled-components";
import type { FCWithChildren } from "src/types";

const StyledPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    margin-bottom: 5rem;
  }
`;

const PaginationWrapper = ({ children }: FCWithChildren) => {
  return <StyledPaginationWrapper>{children}</StyledPaginationWrapper>;
};

export default PaginationWrapper;
