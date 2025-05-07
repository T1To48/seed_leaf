import styled from "styled-components";

export const StyledHeroText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.large.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.maxBold};
  color: ${({ theme }) => theme.color.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  & > * {
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 0rem 1rem;
  }
  & > :first-child {
    transform: perspective(500px) rotateY(-30deg) skew(-5deg);
    letter-spacing: 3px;
    background: linear-gradient(290deg, #ffffff, rgba(209, 209, 209, 0.4));
    box-shadow: -20px 0px 30px rgba(209, 209, 209, 0.5);
  }
  & > :nth-child(2) {
    font-size: 3rem;
    letter-spacing: 1px;
  }
  & > :last-child {
    transform: perspective(500px) rotateY(30deg) skew(5deg);
    letter-spacing: 3px;
    background: linear-gradient(-290deg, #ffffff, rgba(209, 209, 209, 0.4));
    box-shadow: 20px 0px 30px rgba(209, 209, 209, 0.5);
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.large.mobile};
    gap: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.maxBold};
    & > * {
      width: 28vw;
      padding: 0;
    }
    & > :nth-child(2) {
      font-size: ${({ theme }) => theme.fontSize.large.mobile};
      /* width: 30vw; */
      white-space: nowrap;
      align-self: flex-start;
    }
  }
`;