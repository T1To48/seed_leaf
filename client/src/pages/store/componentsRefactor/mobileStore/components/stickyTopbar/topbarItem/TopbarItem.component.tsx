import type { ClickEventDiv } from "src/types";
import { StyledTopbarItem } from "./topbarItem.styles";
import SortIcon from "src/assets/sort_icon.svg";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";


const TopbarItem = ({
  title,
  openModal,
}: {
  title: "sort" | "filter";
  openModal: (status: "sort" | "filter") => void;
}) => {
  const icon =
    title === "sort" ? <img src={SortIcon} /> : <AdjustmentsHorizontalIcon />;

  const handleClick = (e: ClickEventDiv) => {
    e.stopPropagation();
    openModal(title);
  };
  return (
    <StyledTopbarItem onClick={handleClick}>
      {icon} {title}
    </StyledTopbarItem>
  );
};

export default TopbarItem;
