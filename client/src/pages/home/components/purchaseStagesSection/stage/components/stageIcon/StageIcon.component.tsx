import { StageIconProps } from "src/types";
import { StyledStageCircle, StyledStageIcon } from "./stageIcon.styles";

const StageIcon = ({ size, src }: StageIconProps) => {
  return (
    <StyledStageCircle>
      <StyledStageIcon $size={size} src={src} />
    </StyledStageCircle>
  );
};

export default StageIcon;
