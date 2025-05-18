import { MinusIcon } from "@heroicons/react/24/outline";
import styled from "styled-components";

export const StyledInputsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const StyledPriceInput = styled.input`
  padding: 0.6rem;
  text-align: center;
  width: 4.8rem;
  height: 2.9rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: 1px solid ${({ theme }) => theme.color.text};

  // hiding input type number arrow for
  // mozilla firefox browser
  -moz-appearance: textfield;

  // For safari and chrome
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.primary};
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    opacity: 1;
  }
`;

export const StyledHyphenIcon = styled(MinusIcon)`
  width: 1.2rem;
  stroke-width: 0.35rem;
  color: ${({ theme }) => theme.color.text};
`;
