import styled from "styled-components"
import { UserIcon,ShoppingCartIcon } from "@heroicons/react/24/outline"
import { XCircleIcon,
  // CheckCircleIcon 
} from "@heroicons/react/16/solid"
const NavClientActions = () => {

  const StyledActionsList=styled.div`
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    gap:5rem;
    @media (max-width:${({theme})=>theme.siteMaxWidth.mobile}){
    /* gap:1.5rem; */
    /* padding-right: 1rem; */

    }
  `
  const StyledActionItem = styled.a`
    width:3.5rem;
    color: ${props=>props.theme.color.secondary};
    transition:0.2s ease-out;
    &:hover{
        color:${props=>props.theme.color.hover};
      }
  `

  const StyledProfileIcon=styled.div`
    position: relative;
    & > *{
      position: absolute;
      
    }
    & >:first-child{
      width: 1.5rem;
      top:7px;
      right:22px;
      color:${props=>props.theme.color.error};
      z-index: 100;
    }
  `

  return (
    <StyledActionsList>

      <StyledActionItem >
       
        <StyledProfileIcon>
        <XCircleIcon  />
        <UserIcon />
        </StyledProfileIcon>
      </StyledActionItem>

      <StyledActionItem>
        <ShoppingCartIcon/>
      </StyledActionItem>

    </StyledActionsList>
  )
}

export default NavClientActions