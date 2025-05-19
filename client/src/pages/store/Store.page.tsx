import {
  StyledPageWrapper,
  StyledStoreContainer,
  StyledStoreContentWrapper,
} from "./store.styles";
import { useAppSelector } from "src/redux";
import {
  Topbar,
  Sidebar,
  ProductsList,
  ProductsPagination,
  MobileStore,
} from "./componentsRefactor";

const Store = () => {
  const { isMobile } = useAppSelector((state) => state.ui);

  return (
    <StyledPageWrapper>
      {isMobile ? (
        <MobileStore />
      ) : (
        <StyledStoreContainer>
          <Sidebar />
          <StyledStoreContentWrapper>
            <Topbar />
            <ProductsList />
            <ProductsPagination />
          </StyledStoreContentWrapper>
        </StyledStoreContainer>
      )}
    </StyledPageWrapper>
  );
};

export default Store;
