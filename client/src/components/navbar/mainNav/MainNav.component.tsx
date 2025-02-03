import styled from "styled-components";
import NavLogo from "./NavLogo.component";
import NavSearch from "./NavSearch.component";
import NavClientActions from "./NavClientActions.component";
import { Bars3Icon } from "@heroicons/react/24/outline";
const StyledNav = styled.nav`
/* width:100%; */
  padding: 0.5rem 2rem;
  position:fixed;
  top:0;
  right:0;
  left:0;
  z-index:1000;
  background-color:${props => props.theme.color.primary};

  /* transition: background-color 0.2s ease-in-out; */
  `
const StyledNavContainer = styled.div`
  max-width:${props => props.theme.siteMaxWidth.desktop};
  margin:0 auto;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:8rem;
/* background-color: red; */
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
padding: 0.5rem 0 0.8rem 0;

`
const StyledMobileMenuIcon=styled.div`
  width:4rem;
  color: ${props=>props.theme.color.secondary};
`
const MainNav = () => {
  return (
    <StyledNav>
      <StyledNavContainer>

        <StyledNavItem>
          {/* <StyledMobileMenuIcon>
            <Bars3Icon />
          </StyledMobileMenuIcon> */}
            <NavLogo />
        </StyledNavItem>

       
         <StyledMiddleNavItem >
          <NavSearch />
        </StyledMiddleNavItem> 
        
        <StyledNavItem>
          <NavClientActions />
        </StyledNavItem>

      </StyledNavContainer>

      {/* <StyledMobileNavSearch>
        <NavSearch />
      </StyledMobileNavSearch> */}

    </StyledNav>
  )
}

export default MainNav