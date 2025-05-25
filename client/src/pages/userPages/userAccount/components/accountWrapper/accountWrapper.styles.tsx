import styled from "styled-components";

export const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 10rem auto 0;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
    margin-top: 16rem;
  }
`;

export const StyledMainSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  width: 82%;
`;
