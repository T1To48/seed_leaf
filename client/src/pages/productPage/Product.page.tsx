import styled from "styled-components";
import AmaranthImg from "src/assets/Amaranth.jpg";
// import { useEffect } from "react";
// import {useParams,useNavigate,} from "react-router";
import { StyledProductWrapper } from "./product.styles";
import { BreadCrumbs, ProductCard, ProductImg } from "./components";

const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 17rem auto 0;
  min-height: 70vh;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
    margin: 4rem 0 10rem;
  }
`;

const ProductPage = () => {
  // const {productId}=useParams()
  //   const navigate=useNavigate()
  const productFromDB = {
    title: "Amaranth",
    img: AmaranthImg,
    price: 10.5,
    description:
      "With a mild flavour reminiscent of red beet or spinach, this herb offers a delicious taste that beautifully complements a wide array of dishes.",
  };
  const { img } = productFromDB;
  //   useEffect(() => {
  //     if (productId != "9bef33df-a3e4-4fda-b719-75dcdff5664a") {
  //       navigate("/store");
  //     }
  //   }, []);
  return (
    <StyledPageWrapper>
      <BreadCrumbs />

      <StyledProductWrapper>
        <ProductImg src={img} />
        <ProductCard product={productFromDB} />
      </StyledProductWrapper>
    </StyledPageWrapper>
  );
};

export default ProductPage;
