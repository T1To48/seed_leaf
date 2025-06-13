import {
  StyledCardWrapper,
  StyledInfoContainer,
  StyledLinkBtnContainer,
  StyledLink,
} from "./orderCard.styles";

const OrderCard = () => {
  return (
    <StyledCardWrapper>
      <StyledInfoContainer>
        <p>
          Order No:<span> 63753747</span>
        </p>
        <p>
          Purchase Date:<span> 14/01/2025</span>
        </p>
        <p>
          Value:<span> €15.50</span>
        </p>
      </StyledInfoContainer>
      <StyledLinkBtnContainer>
        <StyledLink to={"https://www.google.com"}>View Details</StyledLink>
      </StyledLinkBtnContainer>
    </StyledCardWrapper>
  );
};

export default OrderCard;
