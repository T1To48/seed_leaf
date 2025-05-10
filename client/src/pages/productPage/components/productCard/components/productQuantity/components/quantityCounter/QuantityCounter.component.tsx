import { StyledQtyCounter } from "./quantityCounter.styles"
import { Button,CurrentQuantity } from "./components"
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline"
const QuantityCounter = () => {
  return (
    <StyledQtyCounter>
      <Button onClick={()=>console.log("minus qty btn")}><MinusIcon/></Button>

      <CurrentQuantity currentQty={1}/>

      <Button onClick={()=>console.log("plus qty btn")}><PlusIcon/></Button>
    </StyledQtyCounter>
  )
}

export default QuantityCounter