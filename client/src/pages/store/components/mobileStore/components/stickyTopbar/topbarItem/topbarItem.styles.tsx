import styled from "styled-components";

export const StyledTopbarItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  text-transform: capitalize;
  width: 50%;
  font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.text};
  & img,
  svg {
    width: 3.5rem;
  }
`;
