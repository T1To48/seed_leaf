import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
`;

export const StyledFilterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  margin-bottom: 0.5rem;
`;

export const StyledCheckboxesWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
`;
