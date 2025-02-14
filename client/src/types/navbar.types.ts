import type { FCWithChildrenAndProps } from "src/types/global.types";

type IsMobileBool = boolean


interface MainNavLeftProps {
  isMobile: IsMobileBool;
}



type MainNavSearchBar = FCWithChildrenAndProps<{isMobile:IsMobileBool}>

export type {MainNavLeftProps, MainNavSearchBar};
