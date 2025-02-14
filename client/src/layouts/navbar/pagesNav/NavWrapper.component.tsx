import { useEffect, useState, useRef } from "react"
import { StyledNavWrapper } from "./NavWrapper.styles"
import type{ FCWithChildren } from "src/types"

const navToggleMarginFactor = 2

const NavWrapper = ({ children }: FCWithChildren) => {
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
        <StyledNavWrapper $isHidden={isHidden}>
            {children}
        </StyledNavWrapper>
    )
}

export default NavWrapper