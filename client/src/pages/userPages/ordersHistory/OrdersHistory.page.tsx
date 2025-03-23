import styled from "styled-components"
import { DropDown } from "src/components"
const StyledPageWrapper = styled.main`
  max-width: ${({ theme }) => theme.siteMaxWidth.desktop};
  margin: 12rem auto 0;
  min-height: 70vh;
  
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  max-width: ${({ theme }) => theme.siteMaxWidth.mobile};
  margin:18rem 0 5rem 0; 
  /* min-height: 90vh; */

  }
`
const StyledContainer=styled.div``
const StyledHeader=styled.header``
const StyledTitle=styled.h1``
const StyledSortDropDownContainer=styled.div``
const StyledOrdersSection=styled.section``
const OrdersHistory = () => {
  return (
    <StyledPageWrapper>
        <StyledContainer>
            <StyledHeader>
            <StyledTitle>
                Orders
            </StyledTitle>
            <StyledSortDropDownContainer>
            <DropDown/>
            </StyledSortDropDownContainer>
            </StyledHeader>
           <StyledOrdersSection>

           </StyledOrdersSection>
        </StyledContainer>
    </StyledPageWrapper>
  )
}

export default OrdersHistory