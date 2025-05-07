import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
`;

export const StyledProductImg = styled.img`
  margin-top: -5rem;
  height: 15rem;
  object-fit: cover;
  aspect-ratio: 1;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    height: 12rem;
    margin-top: -2rem;
  }
`;
export const StyledProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  text-align: center;
  padding: 0rem 0 0 3rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    padding: 2rem 0 0 0;
    margin-left: 0rem;
    width: 100%;
  }
`;
export const StyledProductTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
`;
export const StyledProductPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
`;

