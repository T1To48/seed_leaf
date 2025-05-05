import { ChangeEvent, ChangeEventHandler, PropsWithChildren } from "react";

type FCWithChildren = PropsWithChildren;

type FCWithChildrenAndProps<T> = PropsWithChildren<T>;

type IsMobileBool = boolean;

type ChangeEventInput = ChangeEvent<HTMLInputElement>;
type ChangeEventHandlerInput=ChangeEventHandler<HTMLInputElement>;
export type {
  FCWithChildren,
  FCWithChildrenAndProps,
  IsMobileBool,
  ChangeEventInput,
  ChangeEventHandlerInput
};
