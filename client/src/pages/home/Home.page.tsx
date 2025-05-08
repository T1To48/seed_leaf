import styled from "styled-components";
import {
  FactsSection,
  FeaturedSection,
  HeroSection,
  PurchaseStagesSection,
} from "./components";
const StyledPageWrapper = styled.main`
  width: 100%;
  margin-top: 5rem;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    margin-top: 8rem;
  }
`;


const Home = () => {
  return (
    <StyledPageWrapper>
      <HeroSection />
      <FeaturedSection />
      <FactsSection />
      <PurchaseStagesSection />
    </StyledPageWrapper>
  );
};

export default Home;
