import type { FCWithChildren } from "src/types";
import styled from "styled-components";

const StyledInputLabel = styled.label`
  position: absolute;
  z-index: 5;
  transition: 0.2s ease-in;
  top: 1.3rem;
  left: 1rem;
  background: ${({ theme }) => theme.color.background};
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
`;

const InputLabel = ({ children }: FCWithChildren) => {
  return <StyledInputLabel>{children}</StyledInputLabel>;
};

export default InputLabel;
