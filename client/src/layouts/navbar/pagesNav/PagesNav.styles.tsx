import styled from "styled-components"
import { NavLink } from "react-router"
export const StyledNavContainer = styled.div`
  max-width:${({theme}) => theme.siteMaxWidth.desktop};
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:7rem;
  height: 40px;
  color:${({ theme }) => theme.color.secondary};
  font-size:${({ theme }) => theme.fontSize.normal.desktop} ;
  font-weight:${({ theme }) => theme.fontWeight.semiBold};
  letter-spacing: 1px;
`
export const StyledNavLink = styled(NavLink)`
    position:relative;
    color:${({theme}) => theme.color.secondary};
    transition:0.2s ease-out;  
      
  &::before{
    content: "";
    position: absolute;
    background: ${({theme}) => theme.color.secondary};
    bottom:-5px;
    left:50%;
    width:0;
    height:2px;
    transition:width 0.3s ease-out, left 0.3s ease-out;
    transform: translateX(-50%);
  }
  &:hover::before{
    width: 90%;
  }

`