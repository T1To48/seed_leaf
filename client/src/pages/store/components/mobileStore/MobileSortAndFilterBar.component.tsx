import { useToggleToolBar } from "src/customHooks"
import styled from "styled-components"
import {AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"
import SortIcon from "src/assets/sort_icon.svg"
import React from "react"
const SortAndFilterContainer = styled.div<{ $isHidden: boolean }>`
    position:fixed ;
    top:${({$isHidden})=>$isHidden?"0":"12rem"};
    z-index: 950;
    display: flex;
    width: 100%;
    background:${({theme})=>theme.color.background} ;
    border-bottom: 1px solid rgba(200, 200, 200, 0.9) ;
    box-shadow: 0px 15px 15px rgba(200, 200, 200, 0.3);
    transition: top 0.4s ease-in-out;

    & >:first-child{
        border-right:1px solid rgba(200, 200, 200, 0.9) ;
    }
`


const StyledIcon = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 0.5rem;

    width: 50%;
    font-size: ${({theme})=>theme.fontSize.medium.mobile};
    font-weight: ${({theme})=>theme.fontWeight.semiBold};
    color:${({theme})=>theme.color.text} ;
    & img, svg{
        width: 3.5rem;
    }
`

const MobileSortAndFilterBar = ({toggleSortOrFilter}:{toggleSortOrFilter:(status:"sort"|"filter")=>void}) => {
const isHidden=useToggleToolBar()

  return (
    <SortAndFilterContainer $isHidden={isHidden}>
        <StyledIcon onClick={(e:React.MouseEvent<HTMLDivElement>)=>{e.stopPropagation();toggleSortOrFilter("sort")}}>
            <img src={SortIcon}/> Sort
        </StyledIcon>

        <StyledIcon onClick={(e:React.MouseEvent<HTMLDivElement>)=>{e.stopPropagation();toggleSortOrFilter("filter")}}>
        <AdjustmentsHorizontalIcon/> Filter
        </StyledIcon>
    </SortAndFilterContainer>
  )
}

export default MobileSortAndFilterBar