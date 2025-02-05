import styled from "styled-components"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"

const StyledNavSearchContainer = styled.div`
  background-color:${({theme}) => theme.color.background};
  width:100%;
  height:4.5rem;
  border-radius: ${({theme}) => theme.borderRadius.medium};
  display: flex;
  justify-content: space-between;
  box-shadow:inset 0px 0px 4px rgba(0,0,0, 0.5);
`
const SearchButton = styled.button`
  background:none;
  border: none;
  width:3rem;
  display: flex;
  align-items: center;
  margin-right: 1rem;
  margin-left: 0.2rem;
  color: ${({theme}) => theme.color.accent};
  transition:0.2s  ease-in-out;
  &:hover{
    color:${({theme}) => theme.color.hover};
  }
`


const SearchInput = styled.input.attrs({
  type:"text",
  placeholder:"What are you looking for?"
})`
caret-color:${({theme}) => theme.color.primary};
background:none;
border: none;
width:100%;
font-size:${({theme}) => theme.fontSize.medium.desktop};
color:${({theme}) => theme.color.text};
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
        <MagnifyingGlassIcon width={28.14} height={28.14} />
        </SearchButton>
    </StyledNavSearchContainer>
  )
}

export default NavSearch