import styled from "styled-components"

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0 1rem;
  max-height: 28rem;
  overflow-y: auto;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-height: 33vh;
  }
`;