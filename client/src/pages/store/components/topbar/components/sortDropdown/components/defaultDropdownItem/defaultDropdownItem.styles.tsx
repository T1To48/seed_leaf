import styled from "styled-components";

export const StyledDropdownDefaultItem = styled.div<{$isGapBig:boolean}>`
  padding: 1.2rem 0rem 1rem 0rem;
  
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  /* box-shadow:0 0.5rem 1.2rem rgba(0, 0, 0, 0.15); */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: ${({$isGapBig})=>$isGapBig?"5rem":"3rem"};
  & :first-child {
    width: 2rem;
    stroke-width: 0.25rem;
  }
  /* width:100%; */
`;