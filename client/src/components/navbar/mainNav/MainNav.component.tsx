import { toggleHamburgerMenu, useAppDispatch, useAppSelector } from "src/redux";

import styled from "styled-components";

import NavLogo from "./NavLogo.component";
import NavSearch from "./NavSearch.component";
import NavClientActions from "./NavClientActions.component";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const StyledNav = styled.nav`
  padding: 0.5rem 2rem;
  position:fixed;
  top:0;
  right:0;
  left:0;
  z-index:1000;
  background-color:${({theme}) => theme.color.primary};
  height:${({theme}) => theme.navbar.mainNavHeight.desktop};

  /* transition: background-color 0.2s ease-in-out; */
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    height:${({theme}) => theme.navbar.mainNavHeight.mobile};
  }

  `
const StyledNavContainer = styled.div`
  max-width:${({theme}) => theme.siteMaxWidth.desktop};
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:8rem;
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    gap: 0;
  justify-content:space-between;
  }
`
const StyledNavItem = styled.div`
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
display: flex;
align-items: center;
  }
`

const StyledMiddleNavItem=styled(StyledNavItem)`
  width:80%;
`
const StyledMobileNavSearch = styled.div`
padding: 0.8rem  0;

`
const StyledMobileMenuIcon=styled.div<{$isOpen:boolean}>`
  width:5rem;
  color: ${({theme}) => theme.color.secondary};
`
const MainNav = () => {
  const dispatch = useAppDispatch()
  const {isMobile,isHamburgerMenuOpen} = useAppSelector((state)=>state.ui)
  const handleMobileMenuToggle= ()=>{
    dispatch(toggleHamburgerMenu(!isHamburgerMenuOpen))
  }
  return (
    <StyledNav>
      <StyledNavContainer>

        <StyledNavItem>

          {isMobile && 
          <StyledMobileMenuIcon $isOpen={isHamburgerMenuOpen} onClick={handleMobileMenuToggle}>
           {
           isHamburgerMenuOpen?
           <XMarkIcon/>:<Bars3Icon  />
           } 
          </StyledMobileMenuIcon> }

            <NavLogo />
        </StyledNavItem>

       
         {!isMobile && 
         <StyledMiddleNavItem >
          <NavSearch />
        </StyledMiddleNavItem> }
        
        <StyledNavItem>
          <NavClientActions />
        </StyledNavItem>

      </StyledNavContainer>

      {isMobile && 
      <StyledMobileNavSearch>
        <NavSearch />
      </StyledMobileNavSearch> }

    </StyledNav>
  )
}

export default MainNav