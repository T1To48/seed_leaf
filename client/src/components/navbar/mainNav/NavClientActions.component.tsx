import styled from "styled-components"
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"
import {
  XCircleIcon,
  // CheckCircleIcon 
} from "@heroicons/react/16/solid"

const StyledActionsList = styled.div`
    display: flex;
    gap:4rem;
    @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    gap:2rem;
    }
  `
const StyledActionItem = styled.a`
    width:3.5rem;
    color: ${({ theme }) => theme.color.secondary};
    transition:0.2s ease-out;
    &:hover{
        color:${({ theme }) => theme.color.hover};
      }
  `

const StyledProfileIcon = styled.div`
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
const NavClientActions = () => {



  return (
    <StyledActionsList>

      <StyledActionItem >

        <StyledProfileIcon>
          <XCircleIcon />
          <UserIcon />
        </StyledProfileIcon>
      </StyledActionItem>

      <StyledActionItem>
        <ShoppingCartIcon />
      </StyledActionItem>

    </StyledActionsList>
  )
}

export default NavClientActions