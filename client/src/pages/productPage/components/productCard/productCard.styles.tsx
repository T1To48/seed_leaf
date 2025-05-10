import styled from "styled-components";

export const StyledCardWrapper = styled.section`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.text};
  gap: 2rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
    gap: 3rem;
  }
`;
