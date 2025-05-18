import styled from "styled-components";

export const StyledFilterBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  text-transform:capitalize;
  font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 2px 3px 12px rgba(200, 200, 200, 0.6),
    -2px 3px 12px rgba(200, 200, 200, 0.6);
  &:hover {
    background: #46a049;
  }
  & > :first-child {
    width: 1.8rem;
  }
`;


export const StyledResetFiltersBadge= styled(StyledFilterBadge)`
  color: ${({ theme }) => theme.color.text};
  background: ${({ theme }) => theme.color.secondary};
  border: 1px solid ${({ theme }) => theme.color.accent};
  &:hover {
    color: ${({ theme }) => theme.color.text};
    background: ${({ theme }) => theme.color.hover};
    border-color: ${({ theme }) => theme.color.hover};
  }
`;