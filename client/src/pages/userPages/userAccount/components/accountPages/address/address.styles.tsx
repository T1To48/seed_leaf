import styled from "styled-components";

export const StyledAddressWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(169, 169, 169, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 70%;
  height: 40vh;
`;

export const StyledAddressInput = styled.input`
  padding: 1rem;
  width: 30rem;
  background: ${({ theme }) => theme.color.background};
  z-index: 10;
  padding: 1rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.accent};
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
   margin-top :5rem ;
  &:focus{
  border: 1.2px solid black;
  }
`;
