import styled from "styled-components"
import { ChevronUpIcon,ChevronDownIcon } from "@heroicons/react/24/outline"
import { type MouseEvent } from "react"
const StyledDropdownDefaultItem = styled.div`
font-weight:${({theme})=>theme.fontWeight.semiBold};

  padding:  1.2rem 2rem 1rem ;
  
  /* box-shadow:0 0.5rem 1.2rem rgba(0, 0, 0, 0.15); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg{
    width:2rem;
    stroke-width: 0.25rem;
  }
`
const DropDownDefaultItem = ({value,isDropDownOpen,handleDropDownClick}:{value:string,isDropDownOpen:boolean,handleDropDownClick:(e: MouseEvent<HTMLDivElement>) => void}) => {
  return (
    <StyledDropdownDefaultItem onClick={handleDropDownClick}>{value}{isDropDownOpen?<ChevronUpIcon/>:<ChevronDownIcon/>}</StyledDropdownDefaultItem>

  )
}

export default DropDownDefaultItem