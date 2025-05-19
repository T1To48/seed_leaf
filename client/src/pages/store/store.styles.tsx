import styled from "styled-components";

export const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 12rem auto 0;
  min-height: 85vh;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
    margin-top: 16rem;
  }
`;

export const StyledStoreContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  min-height: inherit;
`;

export const StyledStoreContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  width: 82%;
`;
