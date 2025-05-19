import { useState,useEffect,MouseEvent } from "react";
import styled from "styled-components";
import { ChevronDownIcon,ChevronUpIcon } from "@heroicons/react/24/outline";
const StyledDropdownContainer = styled.div`
position:relative;
/* appearance: base-select; */
width:25rem;
font-size:${({theme})=>theme.fontSize.normal.desktop};
text-align: left;
/* background:${({theme})=>theme.color.background}; */
/* grid-column:1 /  span 1; */
grid-row:1 /  span 1;
z-index: 2;
color:${({theme})=>theme.color.text};
`;




const StyledDropdownOptions = styled.div<{$isOpen:boolean}>`
position:absolute;
background:${({theme})=>theme.color.background};
width: 100%;
border:1px solid ${({theme})=>theme.color.accent};
border-radius:${({theme})=>theme.borderRadius.small};
cursor: pointer;
overflow: hidden;
/* height: ${({$isOpen})=>$isOpen?"fit-content":"4.4rem"}; */
height: ${({$isOpen})=>$isOpen?"fit-content":"4.4rem"};

& > :nth-child(2){
  height: 1px;
  background:${({theme})=>theme.color.accent};
  width:90%;
  margin: 0 auto;
}


`
const StyledDropdownDefaultItem = styled.div`

  padding:  1.2rem 0rem 1rem 2rem ;
  
  font-weight:${({theme})=>theme.fontWeight.semiBold};
  /* box-shadow:0 0.5rem 1.2rem rgba(0, 0, 0, 0.15); */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap:3rem;
  & :first-child{
    width:2rem;
    stroke-width: 0.25rem;
  }
  /* width:100%; */
`
const StyledDropdownItem = styled.div`
padding:  1rem 2rem;
transition:  0.2s ease-out;
&:hover{
  background: ${({theme})=>theme.color.hover};
}
`;

const SortDropdown = () => {
  const [isDropdownOpen,setIsDropdownOpen]=useState(false)


  const handleDropDownClick=(e:MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation()
    setIsDropdownOpen((preVal)=>!preVal)
  }
  
  useEffect(()=> {
    if (!isDropdownOpen) return;
    const closeDropDown =()=>setIsDropdownOpen(false)
    document.documentElement.addEventListener("click",closeDropDown)
    return ()=>{
      document.documentElement.removeEventListener("click",closeDropDown)
    }
  },[isDropdownOpen])


  return (
    <StyledDropdownContainer>
      <StyledDropdownOptions $isOpen={isDropdownOpen}>

        <StyledDropdownDefaultItem onClick={handleDropDownClick}>Alphabetically: A to Z {isDropdownOpen?<ChevronUpIcon/>:<ChevronDownIcon/>}</StyledDropdownDefaultItem>
          <div></div>
        <StyledDropdownItem >Alphabetically: Z to A</StyledDropdownItem>
        <StyledDropdownItem >Price: High to Low</StyledDropdownItem>
        <StyledDropdownItem >Price: Low to High</StyledDropdownItem>
      </StyledDropdownOptions>
    </StyledDropdownContainer>
  );
};

export default SortDropdown;
// id={["product_name","ASC"]}
// id={["product_name","DESC"]}
// id={["product_name","ASC"]}
// id={["product_name","DESC"]}