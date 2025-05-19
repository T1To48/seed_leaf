import styled from "styled-components";

const StyledDropdownItem = styled.div`
padding:  1rem 2rem;
transition:  0.2s ease-out;
&:hover{
  background: ${({theme})=>theme.color.hover};
}
`;

const DropdownItem = ({sortOption,onClick}:{sortOption:string;onClick:()=>void}) => {
  return (
    <StyledDropdownItem onClick={onClick}>{sortOption}</StyledDropdownItem>
  )
}

export default DropdownItem