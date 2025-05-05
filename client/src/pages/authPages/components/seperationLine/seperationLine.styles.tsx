import styled from "styled-components";

export const StyledLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
  & p {
    margin: 0 1rem;
    font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
  }
  & span {
    height: 1px;
    width: calc(15% - 4rem);
    background-color: ${({ theme }) => theme.color.primary};
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    & p {
      font-size: ${({ theme }) => theme.fontSize.xSmall.mobile};
    }
    & span {
      height: 1px;
      width: calc(30% - 4rem);
      background-color: ${({ theme }) => theme.color.primary};
    }
  }
`;
