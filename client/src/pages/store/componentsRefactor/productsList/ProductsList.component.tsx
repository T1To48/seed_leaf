import { StyledProductsListWrapper } from "./productsList.styles";
import AmaranthImg from "src/assets/Amaranth.jpg";
import ArugulaImg from "src/assets/Arugula.jpg";
import CarrotImg from "src/assets/Celery.jpg";
import ProductCard from "./productCard/ProductCard.component";
const productsArr = [
  {
    id: "9bef33df-a3e4-4fda-b719-75dcdff5664a",
    name: "Amaranth",
    price: 10.5,
    img: AmaranthImg,
    description: "",
  },
  {
    id: "9bef33df-a3e4-4fda-b719-75dcdff5664a",
    name: "Amaranth",
    price: 10.5,
    img: ArugulaImg,
    description: "",
  },
  {
    id: "9bef33df-a3e4-4fda-b719-75dcdff5664a",
    name: "Amaranth",
    price: 10.5,
    img: CarrotImg,
    description: "",
  },
  {
    id: "9bef33df-a3e4-4fda-b719-75dcdff5664a",
    name: "Amaranth",
    price: 10.5,
    img: "https://supergruen.shop/cdn/shop/files/supergruen_Amarant-01_web_qua.jpg?v=1685456886",
    description: "",
  },
  {
    id: "9bef33df-a3e4-4fda-b719-75dcdff5664a",
    name: "Amaranth",
    price: 10.5,
    img: "https://supergruen.shop/cdn/shop/files/supergruen_Amarant-01_web_qua.jpg?v=1685456886",
    description: "",
  },
];
const ProductsList = () => {
  return (
    <StyledProductsListWrapper>
      {productsArr.map((product) => (
        <ProductCard productDetails={product} />
      ))}
    </StyledProductsListWrapper>
  );
};

export default ProductsList;
