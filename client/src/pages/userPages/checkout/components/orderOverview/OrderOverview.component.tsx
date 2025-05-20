import { ProductsList, TotalPrice } from "./components"
import { StyledOrderOverviewWrapper } from "./orderOverview.styles"

const OrderOverview = () => {
  return (
    <StyledOrderOverviewWrapper>
      <ProductsList/>
      <TotalPrice totalItems={2} totalPrice={245}/>
    </StyledOrderOverviewWrapper>
  )
}

export default OrderOverview