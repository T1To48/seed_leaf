import styled from "styled-components";

export const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 22rem auto 10rem;
  min-height: 60vh;

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
    margin: 18rem 0 15rem 0;
    min-height: 90vh;
  }
`;

export const StyledForm = styled.form``;

export const StyledCheckoutSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    position: relative;
    flex-direction: column;
  }
`;
