import { StyledProductsContainer } from "./productsList.styles";
import ProductCard from "./productCard/ProductCard.component";
import AmaranthImg from "src/assets/Amaranth.jpg";
const productsArr: {
  imgSrc: string;
  name: string;
  price: number;
}[] = [
  {
    imgSrc: AmaranthImg,
    name: "Amaranth",
    price: 15,
  },
  {
    imgSrc: AmaranthImg,
    name: "Amaranth",
    price: 15,
  },
  {
    imgSrc: AmaranthImg,
    name: "Amaranth",
    price: 15,
  },
];

const ProductsList = () => {
  return (
    <StyledProductsContainer>
      {productsArr.map((product) => (
        <ProductCard {...product} />
      ))}
    </StyledProductsContainer>
  );
};

export default ProductsList;
