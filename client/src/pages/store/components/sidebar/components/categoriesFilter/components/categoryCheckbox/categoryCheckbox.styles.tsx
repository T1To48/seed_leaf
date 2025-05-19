import styled from "styled-components";
export const StyledCheckboxWrapper = styled.div`
  position: relative;
  padding-left: 2.5rem;
  line-height: 3rem;
  gap: 1rem;
  &:hover {
    & div {
      opacity: 0.9;
    }
  }

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    padding-left: 3rem;
    line-height: normal;
    height: 3rem;
    &:hover {
      & div {
        opacity: 0.6;
      }
    }
  }
`;
