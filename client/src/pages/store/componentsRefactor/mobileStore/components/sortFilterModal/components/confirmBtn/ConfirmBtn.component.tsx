import { StyledBtnWrapper } from "./confirmBtn.styles";

const ConfirmBtn = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <StyledBtnWrapper>
      <button onClick={onClick} disabled={disabled}>
        ok
      </button>
    </StyledBtnWrapper>
  );
};

export default ConfirmBtn;
