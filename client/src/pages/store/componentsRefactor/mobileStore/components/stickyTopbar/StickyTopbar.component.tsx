import { useToggleToolBar } from "src/customHooks";
import { StyledTopbarWrapper } from "./stickyTopbar.styles";
import TopbarItem from "./topbarItem/TopbarItem.component";

const topbarTitles = ["sort", "filter"] as const;
const StickyTopbar = ({
  openModal,
}: {
  openModal: (status: "sort" | "filter") => void;
}) => {
  const isHidden = useToggleToolBar();

  return (
    <StyledTopbarWrapper $isHidden={isHidden}>

      {topbarTitles.map((title) => (
        <TopbarItem key={title} title={title} openModal={openModal} />
      ))}
      
    </StyledTopbarWrapper>
  );
};

export default StickyTopbar;
