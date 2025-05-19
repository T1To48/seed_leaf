import styled from "styled-components"
import SortDropdown from "./SortDropdown.component"
import CurrentFilters from "./CurrentFilters.component"
const StyledTopbarContainer = styled.header`
    /* background-color: aqua; */
    width:100%;
    height:10rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.25fr;
    margin-top: 3rem;
   
`
const TopbarSortAndFilter = () => {
  return (
    <StyledTopbarContainer>
        <SortDropdown/>
        <CurrentFilters/>
    </StyledTopbarContainer>
  )
}

export default TopbarSortAndFilter