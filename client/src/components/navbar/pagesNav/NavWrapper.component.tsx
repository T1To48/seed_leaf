import { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import { FCWithChildren } from "src/types"
const StyledNav = styled.nav<{ $isHidden: boolean }>`
width:100%;
  padding: 0.5rem 2rem;
  position:fixed;
  top:${
  ({ $isHidden }) => ($isHidden ?
     "0px" :
      ({theme}) => theme.navbar.mainNavHeight.desktop)
  };
  right:0;
  left:0;
  z-index:900;
  background-color:${({ theme }) => theme.color.primary};
  transition: top 0.4s ease-in-out;
  height: ${({theme})=>theme.navbar.pagesNavHeight};

  `
const navToggleMarginFactor = 2
const NavWrapper: FCWithChildren = ({ children }) => {
    const [isHidden, setIsHidden] = useState(false)

    const lastScrollY = useRef(window.scrollY);

    const togglePagesNav = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY.current + navToggleMarginFactor) {
            setIsHidden(true)
        }
        else if (currentScrollY < lastScrollY.current - navToggleMarginFactor) {
            setIsHidden(false)
        }
        lastScrollY.current = currentScrollY
    }
    useEffect(() => {
        window.addEventListener("scroll", togglePagesNav)
        return () => window.removeEventListener("scroll", togglePagesNav)
    }, [])
    return (
        <StyledNav $isHidden={isHidden}>
            {children}
        </StyledNav>
    )
}

export default NavWrapper