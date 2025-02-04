import styled from "styled-components"
import logo from "/logo.jpeg"
import logoString from "/logoString.png"

const StyledNavLogo=styled.div`
display:flex;
align-items: center;
  cursor: pointer;
  & >:first-child{
    width:6rem;
    /* height: 6rem; */
    margin-right: -3px;
  }
  & >:last-child{
    /* height: 4rem; */
    width: 7rem;
}
@media (max-width:${({theme})=>theme.siteMaxWidth.mobile}){
  margin-left: 1rem;
  & >:first-child{
    width:0rem;
  }
  & >:last-child{
    width: 6.5rem;
}
}
`
const NavLogo = () => {
  return (
    <StyledNavLogo>
        <img src={logo}  alt="SEED & LEAF"/>
        <img src={logoString}  alt=""/>

   </StyledNavLogo>
  )
}

export default NavLogo