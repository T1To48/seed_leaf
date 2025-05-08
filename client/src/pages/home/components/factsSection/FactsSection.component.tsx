import FactCard from "./factCard/FactCard.component";
import {
  StyledFactsSection,
  StyledFactsBackground,
  StyledFactsContainer,
} from "./factsSection.styles";
import factsBgImg from "src/assets/facts_section.png";

const factsArr = [
  {
    title: "All Year Round",
    text: "Grown indoors, our microgreens maintain the same fresh taste, quality, and nutrients all year round.",
  },
  {
    title: "Locally Grown",
    text: "Our microgreens are cultivated with care, bringing fresh, natural flavors straight to your table.",
  },
  {
    title: "Pure & Natural",
    text: "Our microgreens are grown in an organic, eco-friendly environment, ensuring maximum freshness and vitality.",
  },
];

const FactsSection = () => {
  return (
    <StyledFactsSection>
      <StyledFactsBackground src={factsBgImg} />
      <StyledFactsContainer>
        {factsArr.map((fact) => (
          <FactCard fact={fact} key={Math.random()} />
        ))}
      </StyledFactsContainer>
    </StyledFactsSection>
  );
};

export default FactsSection;
