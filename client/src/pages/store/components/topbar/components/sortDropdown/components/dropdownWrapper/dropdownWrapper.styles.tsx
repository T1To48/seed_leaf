import styled from "styled-components";

export const StyledDropdownWrapper = styled.div`
  position: relative;
  width: 25rem;
  font-size: ${({ theme }) => theme.fontSize.normal.desktop};
  text-align: left;
  grid-row: 1 / span 1;
  z-index: 2;
  color: ${({ theme }) => theme.color.text};
`;

export const StyledDropdownOptions = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  background: ${({ theme }) => theme.color.background};
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.accent};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  cursor: pointer;
  overflow: hidden;
  height: ${({ $isOpen }) => ($isOpen ? "fit-content" : "4.4rem")};
  & > :nth-child(2) {
    height: 1px;
    background: ${({ theme }) => theme.color.accent};
    width: 90%;
    margin: 0 auto;
  }
`;
