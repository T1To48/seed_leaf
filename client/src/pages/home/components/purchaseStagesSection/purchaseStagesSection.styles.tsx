import styled from "styled-components";

export const StyledPurchaseStagesSection = styled.section`
  width: 100%;
  height: 30rem;
  margin: 5rem 0;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: 100%;
  }
`;

export const StyledTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xLarge.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.text};

  letter-spacing: 1px;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    letter-spacing: normal;
    padding: 0 1rem;
    font-size: ${({ theme }) => theme.fontSize.xLarge.mobile};
  }
`;

export const StyledStagesContainer = styled.div`
  display: flex;
  margin-top: 8rem;
  justify-content: space-evenly;
  /* align-items: center; */
  position: relative;
  /* gap:14rem; */
  & > :nth-child(2) {
    & img {
      padding-top: 2rem;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 27%;
    left: 15%;
    width: 70vw;
    height: 1rem;
    background-color: ${({ theme }) => theme.color.accent};
    /* box-shadow:0 0.5rem 1.2rem rgba(0, 0, 0, 0.20); */
  }

  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    /* margin-left: 5vw; */
    /* left:20vw; */
    width: 100%;
    &::after {
      top: 0;
      left: 75%;
      width: 1rem;
      height: 100%;
    }
  }
`;
