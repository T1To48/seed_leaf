import { useCallback, useState } from "react"
import styled from "styled-components"
import {ProductsList,ProductsPagination} from "../index"
import MobileSortAndFilterBar from "./MobileSortAndFilterBar.component"
import FilterAndSearchLayer from "./FilterAndSearchLayer.component"
const MobileStoreContainer = styled.section`
    
`
const MobileStore = () => {
  const [isSortOrFilterOpen,setIsSortOrFilterOpen]=useState<"sort"|"filter"|null>(null)
  const toggleSortOrFilter=useCallback((LayerStatus:"sort"|"filter"|null)=>{
    setIsSortOrFilterOpen(LayerStatus)
  },[])
 
  return (
    <>
        <FilterAndSearchLayer closeSortOrFilter={toggleSortOrFilter} layerStatus={isSortOrFilterOpen}/>
    <MobileStoreContainer>
        <MobileSortAndFilterBar toggleSortOrFilter={toggleSortOrFilter}/>
        <ProductsList/>
        <ProductsPagination/>
    </MobileStoreContainer>
    </>
  )
}

export default MobileStore