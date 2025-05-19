import { useCallback, useState } from "react"
import {
  // ProductsList,
  ProductsPagination} from "../index"
import { ProductsList } from "../../componentsRefactor"
import MobileSortAndFilterBar from "./MobileSortAndFilterBar.component"
import FilterAndSearchLayer from "./FilterAndSearchLayer.component"

const MobileStore = () => {
  const [isSortOrFilterOpen,setIsSortOrFilterOpen]=useState<"sort"|"filter"|null>(null)
  
  const toggleSortOrFilter=useCallback((LayerStatus:"sort"|"filter"|null)=>{
    setIsSortOrFilterOpen(LayerStatus)
  },[])
 
  return (
    <>
    {/* add condition that retun <FilterAndSearchLayer> only when isSortOrFilterOpen !== null */}
        <FilterAndSearchLayer closeSortOrFilter={toggleSortOrFilter} layerStatus={isSortOrFilterOpen}/>
    <section>
        <MobileSortAndFilterBar toggleSortOrFilter={toggleSortOrFilter}/>
        <ProductsList/>
        <ProductsPagination/>
    </section>
    </>
  )
}

export default MobileStore