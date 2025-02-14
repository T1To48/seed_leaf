import styled from "styled-components";


export const StyledMobileMenuIcon = styled.div<{ $isOpen: boolean }>`
  width: 5rem;
  color: ${({ theme }) => theme.color.secondary};
`;