import styled from "styled-components";

export const StyledActionsList = styled.div`
    display: flex;
    gap:4rem;
    @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    gap:2rem;
    }
  `
export const StyledActionItem = styled.a`
    width:3.5rem;
    color: ${({ theme }) => theme.color.secondary};
    transition:0.2s ease-out;
    &:hover{
        color:${({ theme }) => theme.color.hover};
      }
  `

export const StyledProfileIcon = styled.div`
    position: relative;
    & > *{
      position: absolute;
    }
    & >:first-child{
      width: 1.5rem;
      top:7px;
      right:22px;
      color:${({ theme }) => theme.color.error};
      z-index: 10;
    }
  `