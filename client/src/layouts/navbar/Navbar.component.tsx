import MainNav from "./mainNav/MainNav.component";
import PagesNav from "./pagesNav/PagesNav.component";
import HamburgerManu from "./hamburgerMenu/HamburgerMenu.component";
import { useAppSelector } from "src/redux";

const Navbar = () => {
  const { isMobile, isHamburgerMenuOpen } = useAppSelector((state) => state.ui);
  
  return (
    <div aria-label="nav">
      <MainNav />
      {isMobile ? <HamburgerManu isOpen={isHamburgerMenuOpen} /> : <PagesNav />}
    </div>
  );
};
export default Navbar;

