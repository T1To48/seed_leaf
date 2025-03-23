import { useState,useEffect, type MouseEvent } from "react"
import { StyledDropdownContainer,StyledDropdownOptions } from "./DropDown.styles"
import DropDownDefaultItem from "./DropDownDefaultItem.component"
import DropDownItem from "./DropDownItem.component"
const DropDown = () => {
    const [isDropDownOpen,setIsDropDownOpen]=useState(false)


    const handleDropDownClick=(e:MouseEvent<HTMLDivElement>)=>{
      e.stopPropagation()
      setIsDropDownOpen((preVal)=>!preVal)
    }
    
    useEffect(()=> {
      if (!isDropDownOpen) return;
      const closeDropDown =()=>setIsDropDownOpen(false)
      document.documentElement.addEventListener("click",closeDropDown)
      return ()=>{
        document.documentElement.removeEventListener("click",closeDropDown)
      }
    },[isDropDownOpen])
  
  
    return (
      <StyledDropdownContainer>
        <StyledDropdownOptions $isOpen={isDropDownOpen}>
  
          <DropDownDefaultItem isDropDownOpen={isDropDownOpen} value={"one"} handleDropDownClick={handleDropDownClick} />
            <div></div>
          <DropDownItem value={"test"} />
          <DropDownItem value={"test"} />
          <DropDownItem value={"test"} />
        </StyledDropdownOptions>
      </StyledDropdownContainer>
    );
}

export default DropDown