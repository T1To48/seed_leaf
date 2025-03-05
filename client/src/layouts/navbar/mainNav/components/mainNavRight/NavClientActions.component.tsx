import {
  StyledActionsList,
  StyledActionItem,
  StyledProfileIcon,
} from "./NavClientActions.styles";
import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import {
  XCircleIcon,
  // CheckCircleIcon
} from "@heroicons/react/16/solid";

const NavClientActions = () => {
  return (
    <StyledActionsList>
      <StyledActionItem to="/login">
        <StyledProfileIcon>
          <XCircleIcon />
          <div/>
          <UserIcon />
        </StyledProfileIcon>
      </StyledActionItem>

      <StyledActionItem to="/cart">
        <ShoppingCartIcon />
      </StyledActionItem>
    </StyledActionsList>
  );
};

export default NavClientActions;
