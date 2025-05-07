import { useAppSelector } from "src/redux";
import { StyledProductsTable } from "./productsTable.styles";
import ProductRow from "./productRow/ProductRow.component";
import AmaranthImg from "src/assets/Amaranth.jpg";

const productsDetailsDB  = [
  {
    id:3243,
    imgSrc: AmaranthImg,
    title: "Amaranth",
    price: 10.50,
    currentQuantity: 1,
  },
  {
    id:32232343,
    imgSrc: AmaranthImg,
    title: "Amaranth",
    price: 10.50,
    currentQuantity: 2,
  }
];
const ProductsTable = () => {
  const { isMobile } = useAppSelector((state) => state.ui);
  return (
    <StyledProductsTable>
      <thead>
        <tr>
          <th>PRODUCT</th>
          {!isMobile && <th>QUANTITY</th>}
          <th>SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {productsDetailsDB.map((product) => (
          <ProductRow isMobile={isMobile} productDetails={product} key={product.id} />
        ))}
      </tbody>
    </StyledProductsTable>
  );
};

export default ProductsTable;
