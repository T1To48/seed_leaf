import styled from "styled-components";

export const StyledCheckboxIcon = styled.div`
  position: absolute;
  top: 0.6rem;
  left: 0.5rem;
  height: 1.5rem;
  aspect-ratio: 1;
  background: ${({ theme }) => theme.color.accent};
  opacity: 0.6;
  border-radius: 3px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  & svg {
    opacity: 0;
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    top: 0;
    height: 2rem;
  }
`;
