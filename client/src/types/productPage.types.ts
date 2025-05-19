import type { ClickBtn, FCWithChildrenAndProps } from "./global.types";

interface ProductDB {
    id: string;
    name: string;
    price: number;
    description: string;
    img: string;
}


type QuantityBtnProps = FCWithChildrenAndProps<ClickBtn>

export type { ProductDB, QuantityBtnProps }