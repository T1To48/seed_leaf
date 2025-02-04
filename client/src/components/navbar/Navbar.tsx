import MainNav from "./mainNav/MainNav.component";
import PagesNav from "./pagesNav/PagesNav.component";
import HamburgerManu from "./hamburgerMenu/HamburgerMenu.component";
import { useAppSelector } from "src/redux";
const Navbar = () => {
  const { isMobile, isHamburgerMenuOpen } = useAppSelector((state) => state.ui);
  return (
    <>
      <MainNav />
      {isMobile ? <HamburgerManu isOpen={isHamburgerMenuOpen} /> : <PagesNav />}
    </>
  );
};
export default Navbar;

