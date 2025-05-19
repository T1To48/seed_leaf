import {
  StyledHeaderWrapper,
  StyledTitle,
  StyledCloseIcon,
  XMarkIcon,
} from "./modalHeader.styles";
const ModalHeader = ({
  title,
  closeModal,
}: {
  title: "Sort By" | "Filter Options";
  closeModal: (arg: null) => void;
}) => {
  return (
    <StyledHeaderWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledCloseIcon>
        <XMarkIcon onClick={() => closeModal(null)} />
      </StyledCloseIcon>
    </StyledHeaderWrapper>
  );
};

export default ModalHeader;
