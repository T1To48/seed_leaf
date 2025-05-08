import styled from "styled-components";

export const StyledFactsSection = styled.section`
  width: 100%;
  height: 50rem;
  position: relative;
  display: flex;
  justify-content: center;
  box-shadow: 0px 15px 15px rgba(200, 200, 200, 0.3);
  &::before {
    content: "";
    position: absolute;
    background: rgba(180, 180, 180, 0.3);
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: 110rem;
  }
`;

export const StyledFactsBackground = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const StyledFactsContainer = styled.div`
  /* position:absolute; */
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10vw;
  padding: 0 2rem;
  & > :nth-child(2) {
    transform: scale(1.2);
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    flex-direction: column;
    & > :nth-child(2) {
      transform: scale(1);
    }
  }
`;
