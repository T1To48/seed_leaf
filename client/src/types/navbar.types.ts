import type { FCWithChildrenAndProps,IsMobileBool } from "src/types/global.types";



interface MainNavLeftProps {
  isMobile: IsMobileBool;
}



type MainNavSearchBar = FCWithChildrenAndProps<{isMobile:IsMobileBool}>

export type {MainNavLeftProps, MainNavSearchBar};
