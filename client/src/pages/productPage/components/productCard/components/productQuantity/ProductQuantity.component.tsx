import { StyledQtyContainer } from "./productQuantity.styles"
import { ProductQtyTitle, QuantityCounter} from "./components"
const ProductQuantity = () => {
  return (
    <StyledQtyContainer>
      <ProductQtyTitle/>
      <QuantityCounter/>
    </StyledQtyContainer>
  )
}

export default ProductQuantity