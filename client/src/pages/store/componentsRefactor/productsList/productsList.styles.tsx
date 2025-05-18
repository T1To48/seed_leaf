import styled from "styled-components";

export const StyledProductsListWrapper = styled.div`
  display: grid;
  grid-template: auto / repeat(3, 1fr);
  justify-items: center;
  padding: 5rem;
  gap: 7rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    grid-template: auto / 1fr;
    gap: 4rem;
    padding: 5rem 0;
  }
`;
