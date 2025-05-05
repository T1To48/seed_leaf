import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 30%;
  padding: 1rem;
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: none;
  background: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  transition: 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 70%;
  }
`;
