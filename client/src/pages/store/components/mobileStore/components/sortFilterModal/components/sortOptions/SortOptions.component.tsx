import { useCallback, useState } from "react";
import SortOptionItem from "./sortOptionItem/SortOptionItem.component"
import type{  SortMethods } from "src/types"
import { SORTMETHODS } from "src/types";
const {AtoZ}=SORTMETHODS
const sortOptionsArr :{id:SortMethods;text:string;}[]=[
  {
    id:"AtoZ",
    text:"Alphabetically: A to Z"
  },
  {
    id:"ZtoA",
    text:"Alphabetically: Z to A"
  },
  {
    id:"HIGHtoLOW",
    text:"Price: High to Low"
  },
  {
    id:"LOWtoHIGH",
    text:"Price: Low to High"
  },
]
const SortOptions = () => {
    const [currentSort, setCurrentSort] = useState<SortMethods>(AtoZ);

  const handleCurrentSort = useCallback((sortOption: SortMethods) => {
    setCurrentSort(sortOption);
  },[]);
  return (
    <>
    {sortOptionsArr.map((sort)=><SortOptionItem handleCurrentSort={handleCurrentSort} sortOptionDetails={sort} checked={currentSort === sort.id} />)}
    </>
  )
}

export default SortOptions