import styled from "styled-components";

export const StyledCheckoutContainer = styled.div`
  display: flex;
  justify-content: end;
  height: 20rem;
  width: 90%;
  gap: 7rem;
  & textarea {
    width: 20vw;
    min-width: 25rem;
    height: 11rem;
    min-height: 5rem;
    outline: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    padding: 1rem;
    max-height: 20rem;
    resize: vertical;
    font-size: ${({ theme }) => theme.fontSize.small.desktop};
    color: ${({ theme }) => theme.color.text};
    &:focus {
      border: 2px solid ${({ theme }) => theme.color.primary};
    }
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
    width: 100%;
    height: 28rem;
    & textarea {
      resize: none;
      width: 70%;
      height: 100%;
    }
  }
`;

export const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    width: 100%;
    margin: 2rem 0;
  }
`;

export const StyledCartTotal = styled.div`
  display: flex;
  gap: 15vw;

  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    gap: 0;
    width: 70%;
    justify-content: space-between;
  }
`;
export const StyledCheckoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 100%;
  gap: 1rem;
  color: ${({ theme }) => theme.color.secondary};
  background: ${({ theme }) => theme.color.primary};
  margin-top: 1rem;
  transition: 0.2s ease-in;
  &:hover {
    background: ${({ theme }) => theme.color.bgHover};
  }
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    padding: 1rem 0;
    width: 70%;
  }
`;
