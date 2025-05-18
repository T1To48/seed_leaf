import { CurrentFilters, SortDropdown } from "./components"
import {StyledTopbarWrapper}  from "./topbar.styles"

const Topbar = () => {
  return (
    <StyledTopbarWrapper>
        <SortDropdown/>
        <CurrentFilters/>
    </StyledTopbarWrapper>
  )
}

export default Topbar