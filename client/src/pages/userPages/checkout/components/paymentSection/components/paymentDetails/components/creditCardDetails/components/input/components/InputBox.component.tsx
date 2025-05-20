import type { ChangeEventHandlerInput } from "src/types/global.types";
import styled from "styled-components";

const StyledInputBox = styled.input<{ $isBlank: boolean }>`
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

const InputBox = ({
  value,
  name,
  onChange,
}: {
  value: string;
  name: string;
  onChange: ChangeEventHandlerInput;
}) => {
  return (
    <StyledInputBox  name={name} type="text" value={value} onChange={onChange} $isBlank={!value.length} />
  );
};

export default InputBox;
