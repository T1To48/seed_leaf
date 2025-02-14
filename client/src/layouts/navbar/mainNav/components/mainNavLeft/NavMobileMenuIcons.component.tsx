import { useAppDispatch,useAppSelector, toggleHamburgerMenu } from "src/redux";
import { StyledMobileMenuIcon } from "./MainNavLeft.styles"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NavMobileMenuIcons = () => {
     const dispatch = useAppDispatch();
     const { isHamburgerMenuOpen } = useAppSelector((state) => state.ui);
   
    const handleMobileMenuToggle = () => {
        dispatch(toggleHamburgerMenu(!isHamburgerMenuOpen));
      };
  return (
    <StyledMobileMenuIcon
              $isOpen={isHamburgerMenuOpen}
              onClick={handleMobileMenuToggle}
            >
              {isHamburgerMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </StyledMobileMenuIcon>
  )
}

export default NavMobileMenuIcons