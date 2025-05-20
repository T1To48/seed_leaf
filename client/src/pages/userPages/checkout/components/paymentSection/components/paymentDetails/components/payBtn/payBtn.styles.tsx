import styled from "styled-components";

export const StyledBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    position: absolute;
    left: 5%;
    width: 90%;
    bottom: -9rem;
  }
`;

export const StyledPayBtn = styled.button`
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 60%;
  border: none;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  transition: 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
  }
`;
