import { useState, useRef, useEffect } from "react";
import { useAppSelector } from "src/redux";
import type { Direction, Product } from "src/types";
import { DIRECTIONS } from "src/types";

const {left,right}=DIRECTIONS
const useSwipeCarousel = (productsArr:Product[]) => {
    const isMobile = useAppSelector((state) => state.ui.isMobile);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const translateValue = -currentIndex * (100);

    const handleSwipe = (direction: Direction) => {
        if (direction === left && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
        if (direction === right && currentIndex < productsArr.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    useEffect(() => {
        const carousel = carouselRef?.current;
        if (carousel && isMobile) carousel.scrollLeft = 80;
        else if (carousel) carousel.scrollLeft = 0;
        setCurrentIndex(0);
    }, [isMobile]);
    return {currentIndex,handleSwipe,carouselRef,translateValue}
}

export default useSwipeCarousel