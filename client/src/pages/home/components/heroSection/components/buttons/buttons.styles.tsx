import styled from "styled-components";

export const StyledHeroBtnsContainer = styled.div`
  display: flex;
  justify-content: center;
    align-items: center;
  height: 10rem;
  text-align: center;
  gap:8rem;
width:100%;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  flex-direction: column-reverse;
  gap: 2rem;
  height: 15rem;
}
`;

export const StyledHeroBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  color: ${({ theme }) => theme.color.secondary};
  
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border: none;
  background-color: ${({ theme }) => theme.color.accent};
  padding: 1.2rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  letter-spacing: 1px;
  box-shadow: inset 0px 8px 8px rgba(255, 255, 255, 0.4),
    inset 0px 8px 12px rgba(218, 241, 218, 0.2);
  transition: 0.2s ease-out;
  width: 20rem;
  &:hover {
    box-shadow: inset 0px 15px 15px rgba(255, 255, 255, 0.1),
      inset 6px 0px 12px rgba(218, 241, 218, 0.1),
      inset -6px 0px 12px rgba(218, 241, 218, 0.1);
  }


  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  letter-spacing: normal;
  font-size: calc(${({ theme }) => theme.fontSize.medium.mobile} - 0rem);
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  width: fit-content;


  }

`;