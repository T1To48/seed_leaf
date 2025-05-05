import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  position: relative;
  margin-bottom: 4rem;

  & svg {
    position: absolute;
    top: 1.3rem;
    right: 1rem;
    width: 2.2rem;
    stroke-width: 2px;
    color: ${({ theme }) => theme.color.accent};
  }
`;

export const StyledInput = styled.input<{ $isBlank: boolean }>`
  position: relative;
  background: none;
  z-index: 10;
  width: 100%;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};

  ${({ $isBlank }) => !$isBlank && " & ~ label"},&:focus ~ label {
    top: -0.8rem;
    left: 1.4rem;
    font-size: ${({ theme }) => theme.fontSize.xSmall.desktop};
    z-index: 10;
  }
`;
export const StyledInputLabel = styled.label`
  position: absolute;
  z-index: 5;
  transition: 0.2s ease-in;

  top: 1.3rem;
  left: 1rem;
  background: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
`;
export const StyledNamesInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  & > div {
    margin-bottom: 2rem;
  }
`;
