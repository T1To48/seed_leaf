import styled from "styled-components";

export const StyledCarouselSection = styled.section`
  position: relative;
  max-width: 90rem;
  padding: 0 4rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    padding: 0 1rem;
  }
`;

export const StyledCarouselContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 4rem;
  max-height: 40rem;
  width: 100%;
  overflow: hidden;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    padding: 4rem 1rem;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; //For smoother scrolling on iOS Devices
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
