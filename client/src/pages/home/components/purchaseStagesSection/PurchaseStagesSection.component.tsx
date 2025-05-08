import {
  StyledPurchaseStagesSection,
  StyledTitle,
  StyledStagesContainer,
} from "./purchaseStagesSection.styles";
import Stage from "./stage/Stage.component";
import stagesArr from "./stagesArray";
const PurchaseStagesSection = () => {
  return (
    <StyledPurchaseStagesSection>
      <StyledTitle>Enjoying microgreens made easy</StyledTitle>
      <StyledStagesContainer>
        {stagesArr.map((stage) => {
          const { size, src, title } = stage;
          return <Stage size={size} src={src} title={title} key={src} />;
        })}
      </StyledStagesContainer>
    </StyledPurchaseStagesSection>
  );
};

export default PurchaseStagesSection;
