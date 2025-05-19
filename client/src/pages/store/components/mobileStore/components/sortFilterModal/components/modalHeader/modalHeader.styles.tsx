import styled from "styled-components";
import { XMarkIcon } from "@heroicons/react/24/outline";
export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;

export const StyledTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large.mobile};
`;

export const StyledCloseIcon = styled.div`
  width: 2.5rem;
  & svg {
    stroke-width: 2px;
  }
`;

export { XMarkIcon };
