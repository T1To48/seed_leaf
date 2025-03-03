import { useState,useRef,useEffect } from "react";

const navToggleMarginFactor = 2

const useToggleToolBar = () => {
     const [isHidden, setIsHidden] = useState(false)
    
        const lastScrollY = useRef(window.scrollY);
    
        const togglePagesNav = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY<=200 || currentScrollY < lastScrollY.current - navToggleMarginFactor){
                setIsHidden(false)
            }
            else if (currentScrollY > lastScrollY.current + navToggleMarginFactor) {
                setIsHidden(true)
            }
            lastScrollY.current = currentScrollY
        }
    
        useEffect(() => {
            window.addEventListener("scroll", togglePagesNav)
            return () => window.removeEventListener("scroll", togglePagesNav)
        }, [])
    
  return isHidden;
}

export default useToggleToolBar