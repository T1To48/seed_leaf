import type { IsMobileBool } from "./global.types";

interface ProductDetails {
  imgSrc: string;
  title: string;
  price: number;
  currentQuantity: number;
}

interface ProductProps {
  isMobile: IsMobileBool;
  productDetails: ProductDetails;
}

export type { ProductProps };
