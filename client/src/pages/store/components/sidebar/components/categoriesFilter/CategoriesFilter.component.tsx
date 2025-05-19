import { CategoriesContainer,CategoryCheckbox } from "./components"
import { CATEGORIES } from "src/types"
const CategoriesArr=Object.values(CATEGORIES)
const CategoriesFilter = () => {
  return (
    <CategoriesContainer>
      {
        CategoriesArr.map((category)=>(
          <CategoryCheckbox category={category} onClick={()=>console.log("category checkbox onClick")}/>
        ))
      }
    </CategoriesContainer>
  )
}

export default CategoriesFilter