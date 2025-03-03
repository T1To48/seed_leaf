import NavWrapper from "./NavWrapper.component";
import { StyledNavContainer, StyledNavLink } from "./PagesNav.styles";

const PagesNav = () => {
  return (
    <NavWrapper>
      <StyledNavContainer>
        <div>
          <StyledNavLink to="/">HOME</StyledNavLink>
        </div>

        <div>
          <StyledNavLink to="/store">STORE</StyledNavLink>
        </div>

        <div>
          <StyledNavLink to="https://google.com">CONCEPT</StyledNavLink>
        </div>

        <div>
          <StyledNavLink to="https://google.com">GALLERY</StyledNavLink>
        </div>
      </StyledNavContainer>
    </NavWrapper>
  );
};

export default PagesNav;
