import { StyledNavLogo } from "./NavLogo.styles"
import logo from "/logo.jpeg"
import logoString from "/logoString.png"

const NavLogo = () => {
  return (
    <StyledNavLogo href="https://www.google.com">
        <img src={logo}  alt=""/>
        <img src={logoString}  alt="Seed & Leaf"/>
   </StyledNavLogo>
  )
}

export default NavLogo