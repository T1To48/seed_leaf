import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  PropsWithChildren,
} from "react";

type FCWithChildren = PropsWithChildren;

type FCWithChildrenAndProps<T> = PropsWithChildren<T>;

type IsMobileBool = boolean;

type ChangeEventInput = ChangeEvent<HTMLInputElement>;
type ChangeEventHandlerInput = ChangeEventHandler<HTMLInputElement>;

type ClickEventHandlerBtn = MouseEventHandler<HTMLButtonElement>;

interface Product {
  title: string;
  img: string;
  price: number;
}

export type {
  FCWithChildren,
  FCWithChildrenAndProps,
  IsMobileBool,
  ChangeEventInput,
  ChangeEventHandlerInput,
  ClickEventHandlerBtn,
  Product
};
