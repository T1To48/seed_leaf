import styled from "styled-components";

export const StyledStageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 4rem;
  text-align: right;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    flex-direction: row-reverse;
    justify-content: space-around;
    width: 100%;
  }
`;
