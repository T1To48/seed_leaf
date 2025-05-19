import { useEffect } from "react";
import type { ClickEventDiv } from "src/types";
import {
  StyledModalLayer,
  StyledModalContainer,
} from "./sortFilterModal.styles";
import {
  ConfirmBtn,
  FilterOptions,
  ModalHeader,
  SortOptions,
} from "./components";

const SortFilterModal = ({
  modalStatus,
  closeModal,
}: {
  modalStatus: "sort" | "filter"|null;
  closeModal: () => void;
}) => {

  const title = modalStatus === "sort" ? "Sort By" : "Filter Options";
  const isHidden = modalStatus == null;

  useEffect(() => {
    if (modalStatus) {
      document.body.style.overflow = "hidden";
      document.body.addEventListener("click", closeModal);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("click", closeModal);
    };
  }, [modalStatus, closeModal]);

  return (
    <StyledModalLayer $isHidden={isHidden}>
      <StyledModalContainer
        onClick={(e: ClickEventDiv) => e.stopPropagation()}
        $isHidden={isHidden}
      >
        <ModalHeader title={title} closeModal={closeModal} />
        {modalStatus==="sort"?<SortOptions />: <FilterOptions />}
        <ConfirmBtn onClick={() => console.log("first")} disabled={false} />
      </StyledModalContainer>
    </StyledModalLayer>
  );
};

export default SortFilterModal;
