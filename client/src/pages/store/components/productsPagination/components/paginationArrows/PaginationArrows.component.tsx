import { FCWithChildren } from "src/types";
import PaginationArrow from "./paginationArrow/PaginationArrow.component"
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";

const PaginationArrows = ({children}:FCWithChildren) => {
  return (
    <>
    <PaginationArrow size={1.6} to="https://www.google.com" arrowIcon={<ChevronDoubleLeftIcon/>}/>
    <PaginationArrow size={1.8} to="https://www.google.com" arrowIcon={<ChevronLeftIcon/>}/>
    {children}
    <PaginationArrow size={1.8} to="https://www.google.com" arrowIcon={<ChevronRightIcon/>}/>
    <PaginationArrow size={1.6} to="https://www.google.com" arrowIcon={<ChevronDoubleRightIcon/>}/>
    </>
  )
}

export default PaginationArrows