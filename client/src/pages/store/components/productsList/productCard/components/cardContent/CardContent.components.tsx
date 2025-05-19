import { StyledCardContentWrapper } from "./cardContent.styles"
import { AddToCartBtn, ProductPrice, ProductTitle } from "./components"
const CardContent = ({title,price}:{title:string;price:number}) => {
  return (
    <StyledCardContentWrapper>
        <ProductTitle title={title}/>
        <ProductPrice price={price}/>
        <AddToCartBtn/>
    </StyledCardContentWrapper>
  )
}

export default CardContent