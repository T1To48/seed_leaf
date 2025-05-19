import styled from "styled-components";
import {
  SORTMETHODS,
  type SortMethods,
} from "src/types/store.types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState, MouseEvent } from "react";
import PriceFilter from "../sidebarFilters/PriceFilter.component";
import CategoriesFilter from "../sidebarFilters/CategoriesFilter.component";

const StyledLayer = styled.div<{ $isHidden: boolean }>`
  position: fixed;
  z-index: 960;
  background: rgba(0, 0, 0, 0.5);
  top: 12rem;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  transition: transform 0.5s linear;
  transform: ${({ $isHidden }) =>
    $isHidden ? "translateY(-200rem)" : "translateY(0rem)"};
`;
const StyledContainer = styled.div<{ $isHidden: boolean }>`
  position: absolute;
  top: 32vh;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.background};
  padding: 2rem 2rem 3rem;
  transition: transform 0.6s ease;

  transform: ${({ $isHidden }) =>
    $isHidden ? "translateY(50rem)" : "translateY(0rem)"};
`;
const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;
const StyledFilterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large.mobile};
`;
const StyleCloseIcon = styled.div`
  width: 2.5rem;
  & svg {
    stroke-width: 2px;
  }
`;

const StyledSelectWrapper = styled.div`
  position: relative;
  padding-left: 4rem;
  height: 4rem;
  gap: 1rem;
  & div {
    position: absolute;
    top: 0;
    left: 0.5rem;
    height: 2.5rem;
    aspect-ratio: 1;
    background: ${({ theme }) => theme.color.accent};
    opacity: 0.6;
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    transition: 0.2s linear;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    & span {
      padding: 0.55rem;
      border: 1px solid ${({ theme }) => theme.color.secondary};
      border-radius: ${({ theme }) => theme.borderRadius.circle};
      opacity: 0;
      background: black;
    }
  }
`;

const StyledSelect = styled.input.attrs<{
  $sortMethod: SortMethods;
}>((props) => ({
  type: "radio",
  name: "radio",
  id: props.$sortMethod,
  value: props.$sortMethod,
}))`
  position: absolute;
  z-index: 5;
  top: 0rem;
  left: 0.5rem;
  height: 2.5rem;
  width: 2.5rem;
  opacity: 0;
  cursor: pointer;

  &:checked ~ div {
    background: ${({ theme }) => theme.color.primary};
    opacity: 1;
    & span {
      opacity: 1;
    }
  }
`;
const StyledSelectLabel = styled.label.attrs<{
  $sortMethod: SortMethods;
}>((props) => ({
  htmlFor: props.$sortMethod,
}))`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const StyledBtnContainer = styled.div`
  text-align: center;
  margin-top: 1rem;
  & button {
    width: 50%;
    padding: 0.7rem;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
    color: ${({ theme }) => theme.color.secondary};
    background: black;
    border: none;
    &:disabled {
      background-color: ${({ theme }) => theme.color.text};
      opacity: 0.6;
    }
  }
`;

const { AtoZ, ZtoA, LOWtoHIGH, HIGHtoLOW } = SORTMETHODS;
const FilterAndSearchLayer = ({
  layerStatus,
  closeSortOrFilter,
}: {
  layerStatus: "sort" | "filter" | null;
  closeSortOrFilter: (status: "sort" | "filter" | null) => void;
}) => {
  const title = layerStatus === "sort" ? "Sort By" : "Filter Options";
  const [currentSort, setCurrentSort] = useState<SortMethods>(AtoZ);
  const handleCurrentSort = (sortMethod: SortMethods) => {
    setCurrentSort(sortMethod);
  };

  useEffect(() => {
    if (layerStatus) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("click", () => closeSortOrFilter(null));
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("click", () => closeSortOrFilter(null));
    };
  }, [layerStatus, closeSortOrFilter]);

  return (
    <StyledLayer $isHidden={layerStatus == null}>
      <StyledContainer
        onClick={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        $isHidden={layerStatus == null}
      >
        <StyledHeaderWrapper>
          <StyledFilterTitle>{title}:</StyledFilterTitle>
          <StyleCloseIcon>
            <XMarkIcon onClick={() => closeSortOrFilter(null)} />
          </StyleCloseIcon>
        </StyledHeaderWrapper>
        {layerStatus === "sort" ? (
          <>
            <StyledSelectWrapper>
              <StyledSelect
                onChange={() => handleCurrentSort(AtoZ)}
                $sortMethod={AtoZ}
                checked={currentSort == AtoZ}
              />
              <StyledSelectLabel $sortMethod={AtoZ}>
                Alphabetically: A to Z
              </StyledSelectLabel>
              <div>
                <span></span>
              </div>
            </StyledSelectWrapper>

            <StyledSelectWrapper>
              <StyledSelect
                onChange={() => handleCurrentSort(ZtoA)}
                $sortMethod={ZtoA}
                checked={currentSort == ZtoA}
              />
              <StyledSelectLabel $sortMethod={ZtoA}>
                Alphabetically: Z to A
              </StyledSelectLabel>
              <div>
                <span></span>
              </div>
            </StyledSelectWrapper>

            <StyledSelectWrapper>
              <StyledSelect
                onChange={() => handleCurrentSort(HIGHtoLOW)}
                $sortMethod={HIGHtoLOW}
                checked={currentSort == HIGHtoLOW}
              />
              <StyledSelectLabel $sortMethod={HIGHtoLOW}>
                Price: High to Low
              </StyledSelectLabel>
              <div>
                <span></span>
              </div>
            </StyledSelectWrapper>

            <StyledSelectWrapper>
              <StyledSelect
                onChange={() => handleCurrentSort(LOWtoHIGH)}
                $sortMethod={LOWtoHIGH}
                checked={currentSort == LOWtoHIGH}
              />
              <StyledSelectLabel $sortMethod={LOWtoHIGH}>
                Price: Low to High
              </StyledSelectLabel>
              <div>
                <span></span>
              </div>
            </StyledSelectWrapper>
          </>
        ) : (
          <>
            <CategoriesFilter />
            <PriceFilter />
          </>
        )}

        <StyledBtnContainer>
          <button disabled={false}>ok</button>
        </StyledBtnContainer>
      </StyledContainer>
    </StyledLayer>
  );
};

export default FilterAndSearchLayer;
