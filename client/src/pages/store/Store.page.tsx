import styled from "styled-components";
import {
  SidebarFilters,
  TopbarSortAndFilter,
  ProductsList,
  ProductsPagination,
  MobileStore
} from "./components";
import { useAppSelector } from "src/redux";

const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 12rem auto 0;
  min-height: 85vh;
  /* height: 80vh; */
  /* margin-top: 12rem; */
  /* min-height: 85vh; */
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
  margin-top:16rem;

  }
`;
const StyledStoreContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: 0 2rem;
  min-height: inherit;
  /* height: 100% ; */
  /* min-height: 85vh; */

  /* background-color: black ; */
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  /* background-color: yellow; */
  width: 82%;
`;

const Store = () => {
  const {isMobile}=useAppSelector((state)=>state.ui)

  return (
    <StyledPageWrapper>
      {isMobile?
      <MobileStore/>:

      <StyledStoreContainer>
      <SidebarFilters />
      <StyledContentWrapper>
        <TopbarSortAndFilter />

        <ProductsList />

        <ProductsPagination />
      </StyledContentWrapper>
    </StyledStoreContainer>
      }
     
    </StyledPageWrapper>
  );
};

export default Store;
