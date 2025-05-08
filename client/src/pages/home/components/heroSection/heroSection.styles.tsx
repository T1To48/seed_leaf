import styled from "styled-components";

export const StyledHeroWrapper = styled.section`
  width: 100%;
  height: 70rem;
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  &::before {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    z-index: 5;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  box-shadow: 0px 15px 15px rgba(200, 200, 200, 0.3);
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: 50rem;
  }
`;

export const StyledHeroContainer = styled.div`
  position: absolute;
  text-align: center;
  margin-top: 25rem;
  z-index: 10;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    margin-top: 13rem;
  }
`;
