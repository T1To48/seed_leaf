import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import { StyledNavSearchContainer, SearchButton, SearchInput } from "./NavSearch.styles"

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