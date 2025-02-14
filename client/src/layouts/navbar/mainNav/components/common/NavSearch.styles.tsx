import styled from "styled-components"

export const StyledNavSearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  height:4.5rem;
  background-color:${({theme}) => theme.color.background};
  border-radius: ${({theme}) => theme.borderRadius.small};
  box-shadow:inset 0px 0px 4px rgba(0,0,0, 0.5);
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  background:none;
  border: none;
  width:3rem;
  margin-right: 1rem;
  margin-left: 0.2rem;
  color: ${({theme}) => theme.color.accent};
  transition:0.2s  ease-in-out;
  &:hover{
    color:${({theme}) => theme.color.hover};
  }
`


export const SearchInput = styled.input.attrs({
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