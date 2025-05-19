import styled from "styled-components";

export const StyledContainer = styled.div`
  width:90%;
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    width:100%;
  }
`;

export const StyledFilterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  margin-bottom: 1rem;
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    margin-bottom: 0rem;
  }
`;

export const StyledPriceFilterWrapper=styled.div`
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    padding: 1rem 0;
    margin: 0 auto;
    width: 70%;
  }
`