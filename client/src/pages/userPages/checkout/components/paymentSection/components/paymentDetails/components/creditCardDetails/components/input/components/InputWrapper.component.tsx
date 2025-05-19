import styled from 'styled-components';
import { FCWithChildren } from 'src/types'

const StyledInputWrapper = styled.div`
  position: relative;
  margin-bottom: 2rem;

  /* & svg {
    position: absolute;
    top: 1.3rem;
    right: 1rem;
    width: 2.2rem;
    stroke-width: 2px;
    color: ${({ theme }) => theme.color.accent};
  } */
`;

const InputWrapper = ({children}:FCWithChildren) => {
  return (
    <StyledInputWrapper>{children}</StyledInputWrapper>
  )
}

export default InputWrapper