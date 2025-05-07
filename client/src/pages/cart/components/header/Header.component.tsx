import { StyledHeader,StyledCartTitle,StyledLink } from "./header.styles";

const Header = () => {
  return (
    <StyledHeader>
      <StyledCartTitle>Shopping Cart</StyledCartTitle>
      <StyledLink to="/store">Continue Shopping</StyledLink>
    </StyledHeader>
  );
};

export default Header;
