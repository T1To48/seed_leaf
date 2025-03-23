import styled from "styled-components"
const StyledDropdownItem = styled.div`
padding:  1rem 2rem;
transition:  0.2s ease-out;
&:hover{
  background: ${({theme})=>theme.color.hover};
}

`;
const DropDownItem = ({value}:{value:string}) => {
  return (
    <StyledDropdownItem >{value}</StyledDropdownItem>

  )
}

export default DropDownItem