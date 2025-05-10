import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

type ClickBtn = {
  onClick: () => void
}

type FCWithChildren = PropsWithChildren;

type FCWithChildrenAndProps<T> = PropsWithChildren<T>;

type IsMobileBool = boolean;

type ChangeEventInput = ChangeEvent<HTMLInputElement>;
type ChangeEventHandlerInput = ChangeEventHandler<HTMLInputElement>;

type ClickEventBtn = MouseEvent<HTMLButtonElement>;

type ClickEventHandlerBtn = MouseEventHandler<HTMLButtonElement>;

interface Product {
  title: string;
  img: string;
  price: number;
  description:string;
}

export type {
  ClickBtn,
  FCWithChildren,
  FCWithChildrenAndProps,
  IsMobileBool,
  ChangeEventInput,
  ChangeEventHandlerInput,
  ClickEventBtn,
  ClickEventHandlerBtn,
  Product
};
