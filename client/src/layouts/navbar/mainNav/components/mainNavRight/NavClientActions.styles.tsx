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
      color:#FF5252;
      z-index: 10;
    }
    & >:nth-child(2){
      width: 1rem;
      aspect-ratio: 1;
      top:8.5px;
      right:24px;
      background: ${({ theme }) => theme.color.background};
      z-index: 5;
      border-radius: ${({ theme }) => theme.borderRadius.circle};
    }
  `