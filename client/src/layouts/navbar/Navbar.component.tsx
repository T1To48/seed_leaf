import MainNav from "./mainNav/MainNav.component";
import PagesNav from "./pagesNav/PagesNav.component";
import HamburgerManu from "./hamburgerMenu/HamburgerMenu.component";
import { toggleHamburgerMenu, useAppDispatch, useAppSelector } from "src/redux";

const Navbar = () => {
  const dispatch= useAppDispatch()
  const { isMobile, isHamburgerMenuOpen } = useAppSelector((state) => state.ui);
  const handleHamburgerMenuClose = ()=>{
    dispatch(toggleHamburgerMenu(false))
  }
  return (
    <div aria-label="nav">
      <MainNav />
      {isMobile ? <HamburgerManu handleClose={handleHamburgerMenuClose} isOpen={isHamburgerMenuOpen} /> : <PagesNav />}
    </div>
  );
};
export default Navbar;

