import OrderCard from "./orderCard/OrderCard.component"
import { StyledOrdersWrapper } from "./ordersHistory.styles"
const OrdersHistory = () => {
  return (
    <StyledOrdersWrapper>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
      <OrderCard/>
    
    </StyledOrdersWrapper>
  )
}

export default OrdersHistory