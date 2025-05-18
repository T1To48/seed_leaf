import {StyledSidebarWrapper} from "./sidebar.styles"
import { CategoriesFilter,PriceFilter } from "./components"
const Sidebar = () => {
  return (
    <StyledSidebarWrapper>
        <CategoriesFilter/>
        <PriceFilter/>
    </StyledSidebarWrapper>
  )
}

export default Sidebar