import styled from "styled-components";

export const StyledBtnWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
  & button {
    width: 50%;
    padding: 0.7rem;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    color: ${({ theme }) => theme.color.secondary};
    background: black;
    border: none;
    &:disabled {
      background-color: ${({ theme }) => theme.color.text};
      opacity: 0.6;
    }
  }
`;
