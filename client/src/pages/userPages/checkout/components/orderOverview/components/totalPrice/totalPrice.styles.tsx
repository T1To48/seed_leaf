import styled from "styled-components";

export const StyledTotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4rem;
  border-top: 1px solid ${({ theme }) => theme.color.accent};
  padding: 1rem 1rem 0;
  & > div {
    font-size: ${({ theme }) => theme.fontSize.medium.desktop};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  }
  & :first-child {
    display: flex;
    align-items: center;
    & span {
      font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
      font-weight: ${({ theme }) => theme.fontWeight.normal};

      padding-left: 1rem;
    }
  }
`;