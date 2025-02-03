import styled from "styled-components"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"

const StyledNavSearchContainer = styled.div`
  background-color:${props=>props.theme.color.background};
  width:100%;
  height:4.5rem;
  border-radius: ${props=>props.theme.borderRadius.medium};
  display: flex;
  justify-content: space-between;

`
const SearchButton = styled.button`
  background:none;
  border: none;
  width:3rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-left: 0.2rem;
  color: ${props=>props.theme.color.accent};
  transition:0.2s  ease-in-out;
  &:hover{
    color:${props=>props.theme.color.hover};
  }
`


const SearchInput = styled.input.attrs({
  type:"text",
  placeholder:"What are you looking for?"
})`
caret-color:${props=>props.theme.color.primary};
background:none;
border: none;
width:100%;
font-size:${props=>props.theme.fontSize.medium.desktop};
color:${props=>props.theme.color.text};
padding-left:2rem;
 &:focus{
  outline:none
  }
`

const NavSearch = () => {
  

  return (
    <StyledNavSearchContainer>
      <SearchInput  />
      <SearchButton>
        <MagnifyingGlassIcon />
        </SearchButton>
    </StyledNavSearchContainer>
  )
}

export default NavSearch