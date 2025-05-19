import styled from "styled-components";
import { XCircleIcon } from "@heroicons/react/24/outline";
const StyledCurrentFiltersContainer = styled.div`
  /* grid-column: span 1; */
  grid-row: 2 / span 1;
  align-self: end;
  display: flex;
  gap: 1rem;
`;
const StyledFilterLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
  /* font-weight: ${({ theme }) => theme.fontWeight.medium}; */
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 2px 3px 12px rgba(200, 200, 200, 0.6),
    -2px 3px 12px rgba(200, 200, 200, 0.6);

  &:hover {
    background: #46a049;
  }

  & > :first-child {
    width: 1.8rem;
  }
`;

const StyledFilterReset = styled(StyledFilterLabel)`
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.secondary};
  border: 1px solid ${({ theme }) => theme.color.accent};
  &:hover {
    color: ${({ theme }) => theme.color.text};
    background: ${({ theme }) => theme.color.hover};
    border-color: ${({ theme }) => theme.color.hover};
  }
`;
const CurrentFilters = () => {
  return (
    <StyledCurrentFiltersContainer>
      <StyledFilterReset>
        <XCircleIcon />
        Reset Filters
      </StyledFilterReset>
      <StyledFilterLabel>
        <XCircleIcon /> Category: Microgreens
      </StyledFilterLabel>
      <StyledFilterLabel>
        <XCircleIcon /> Price: &#8364;10
      </StyledFilterLabel>
    </StyledCurrentFiltersContainer>
  );
};

export default CurrentFilters;
