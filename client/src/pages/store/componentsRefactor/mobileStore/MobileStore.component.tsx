import { useState, useCallback } from "react";
import { ProductsList, ProductsPagination } from "../index";
import { SortFilterModal, StickyTopbar } from "./components";
const MobileStore = () => {
  const [modalStatus, setModalStatus] = useState<"sort" | "filter" | null>(
    null
  );

  const toggleModal = useCallback((LayerStatus: "sort" | "filter" | null) => {
    setModalStatus(LayerStatus);
  }, []);
  return (
    <>
      <SortFilterModal
        modalStatus={modalStatus}
        closeModal={() => toggleModal(null)}
      />

      <section>
        <StickyTopbar openModal={toggleModal} />
        <ProductsList />
        <ProductsPagination />
      </section>
    </>
  );
};

export default MobileStore;
