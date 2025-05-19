import styled from "styled-components";
import  { CATEGORIES,type Categories } from "src/types/store.types";
import { CheckIcon } from "@heroicons/react/24/outline";
const StyledContainer = styled.div`
width: 100%;
`

const StyledCheckboxWrapper = styled.div`
position: relative;
  padding-left: 2.5rem;
  line-height: 3rem;
  gap: 1rem;
 & div{
  position: absolute;
  top: 0.6rem;
  left: 0.5rem;
  height: 1.5rem;
  aspect-ratio: 1;
  /* width:  2rem; */
  background: ${({theme})=>theme.color.accent};
  opacity:0.6;
  border-radius:3px;
  transition:  0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  justify-content: center;
  & svg{
    opacity: 0;
  }
 }

 &:hover{
  & div{
  opacity:0.9;
  }
  }

  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    padding-left: 3rem;
    line-height: normal;
    height: 3rem;
 & div{
  top:0;
  height: 2rem;

}
&:hover{
  & div{
  opacity:0.6;
  }
  }
}
`

const StyledFilterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  margin-bottom: 0.5rem;
`;

const StyledCheckboxesContainer=styled.div`
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    gap:3rem;
  }
`

const StyledCheckbox = styled.input.attrs<{
  $category: Categories;
}>((props) => ({
  type: "checkbox",
  name: props.$category,
  id: props.$category,
  value: props.$category,
}))`
position:absolute;
z-index: 5;
top: 0.6rem;
  left: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  opacity: 0;
  cursor: pointer;

  &:checked ~ div{
    background: ${({theme})=>theme.color.primary};
  opacity:1;
  & svg{
    width: 1rem;
    stroke-width: 0.5rem;
    opacity: 1;
    color:black;
  }

  }
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
  /* opacity: 1; */

top: -0.5rem;
height: 4rem;
  width: 4rem;
  -webkit-tap-highlight-color: transparent;
  }

`;
const StyledCheckboxLabel = styled.label.attrs<{
  $category: Categories;
}>((props) => ({
  htmlFor: props.$category,
}))`
cursor: pointer;
font-size: ${({ theme }) => theme.fontSize.small.desktop};
  text-transform: capitalize;
`;

const CategoriesFilter = () => {
  
  return (
    <StyledContainer>
      <StyledFilterTitle>Category:</StyledFilterTitle>
      <StyledCheckboxesContainer>

      {Object.values(CATEGORIES).map((category)=>(
          <StyledCheckboxWrapper key={category}>
          <StyledCheckbox $category={category} />
          <StyledCheckboxLabel $category={category}>{category}</StyledCheckboxLabel>
          <div><CheckIcon/></div>
        </StyledCheckboxWrapper>
      ))}
      </StyledCheckboxesContainer>
    </StyledContainer>
  );
}

export default CategoriesFilter;
