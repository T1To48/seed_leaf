import type { ClickEventHandlerBtn, Direction } from "src/types";
import { DIRECTIONS } from "src/types";
import { StyledBtnWrapper, StyledButton } from "./button.styles";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const {right}=DIRECTIONS

const Button = ({
  side,
  isHidden,
  onClick,
}: {
  side: Direction;
  isHidden: boolean;
  onClick: ClickEventHandlerBtn;
}) => {
  return (
    <StyledBtnWrapper $side={side}>
      <StyledButton $side={side} $isHidden={isHidden} onClick={onClick}>
        {side === right ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </StyledButton>
    </StyledBtnWrapper>
  );
};

export default Button;
