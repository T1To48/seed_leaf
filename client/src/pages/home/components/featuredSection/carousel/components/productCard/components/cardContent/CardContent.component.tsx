import { StyledCardContentWrapper,StyledCardTitle,StyledCardPrice } from "./cardContent.styles"
const CardContent = ({title,price}:{title:string;price:number}) => {
  return (
    <StyledCardContentWrapper>
        <StyledCardTitle>{title}</StyledCardTitle>
        <StyledCardPrice>&#8364;{price.toFixed(2)}</StyledCardPrice>
    </StyledCardContentWrapper>
  )
}

export default CardContent