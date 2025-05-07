import type { ProductProps } from "src/types";
import { StyledTableRow } from "./productRow.styles";
import { ProductCard, ProductQuantity, ProductSubtotal } from "./components";

const ProductRow = ({ isMobile, productDetails }: ProductProps) => {
  const { price, currentQuantity } = productDetails;
  

  return (
    <StyledTableRow>
      <ProductCard productDetails={productDetails} isMobile={isMobile} />
      {!isMobile && (
        <td>
          <ProductQuantity currentQuantity={currentQuantity} />
        </td>
      )}
      <ProductSubtotal subtotal={price * currentQuantity} />
    </StyledTableRow>
  );
};

export default ProductRow;
