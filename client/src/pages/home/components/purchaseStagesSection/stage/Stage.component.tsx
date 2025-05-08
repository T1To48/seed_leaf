import { StyledStageContainer } from "./stage.styles";
import { StageIcon, StageTitle } from "./components";
import { StageProps } from "src/types";

const Stage = ({ size, src, title }: StageProps) => {
  return (
    <StyledStageContainer>
      <StageIcon size={size} src={src} />
      <StageTitle>{title}</StageTitle>
    </StyledStageContainer>
  );
};

export default Stage;
