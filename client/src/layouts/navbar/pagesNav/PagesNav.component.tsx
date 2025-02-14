import NavWrapper from "./NavWrapper.component";
import { StyledNavContainer, StyledNavLink } from "./PagesNav.styles";

const PagesNav = () => {
  return (
    <NavWrapper>
      <StyledNavContainer>
        <div>
          <StyledNavLink href="https://google.com">HOME</StyledNavLink>
        </div>

        <div>
          <StyledNavLink href="https://google.com">STORE</StyledNavLink>
        </div>

        <div>
          <StyledNavLink href="https://google.com">CONCEPT</StyledNavLink>
        </div>

        <div>
          <StyledNavLink href="https://google.com">GALLERY</StyledNavLink>
        </div>
      </StyledNavContainer>
    </NavWrapper>
  );
};

export default PagesNav;
