import MainNav from "./mainNav/MainNav.component";
import PagesNav from "./pagesNav/PagesNav.component";
import HamburgerManu from "./hamburgerMenu/HamburgerManu.component";
import { useAppSelector } from "src/redux";
const Navbar = () => {
  const { isMobile, isHamburgerMenuOpen } = useAppSelector((state) => state.ui);
  return (
    <>
      <MainNav />
      {isMobile ? <HamburgerManu isOpen={isHamburgerMenuOpen} /> : <PagesNav />}
    </>
  );
};
export default Navbar;

// const Navbar = () => {
//   return (
//     <StyledNav>
//         <StyledNavContainer>

//         <StyledNavLogo>
//           <img src={logo}  alt="SEED & LEAF"/>
//         </StyledNavLogo>

//         <StyledNavMenuWrapper>

//           <StyledNavMenu>

//           <StyledNavItem>
//             <StyledNavItemLink href="https://google.com">HOME</StyledNavItemLink>
//           </StyledNavItem>

//           <StyledNavItem>
//             <StyledNavItemLink href="https://google.com">SHOP</StyledNavItemLink>
//           </StyledNavItem>

//           <StyledNavItem>
//             <StyledNavItemLink href="https://google.com">CONCEPT</StyledNavItemLink>
//           </StyledNavItem>

//           <StyledNavItem>
//             <StyledNavItemLink href="https://google.com">GALLERY</StyledNavItemLink>
//           </StyledNavItem>

//           </StyledNavMenu>
//         </StyledNavMenuWrapper>
//         </StyledNavContainer>
//     </StyledNav>
//   )
// }

// export default Navbar
