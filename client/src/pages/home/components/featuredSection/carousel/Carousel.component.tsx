import { Button, Card } from "./components";
import { DIRECTIONS } from "src/types";
import productsArr from "./productsArr";
import { useSwipeCarousel } from "src/customHooks";
import {
  StyledCarouselSection,
  StyledCarouselContainer,
} from "./carousel.styles";

const { left, right } = DIRECTIONS;

const Carousel = () => {
  const { currentIndex, handleSwipe, carouselRef, translateValue } =
    useSwipeCarousel(productsArr);

  return (
    <StyledCarouselSection>
      <Button
        side={left}
        isHidden={currentIndex === 0}
        onClick={() => handleSwipe(left)}
      />
      <Button
        side={right}
        isHidden={currentIndex === productsArr.length - 3}
        onClick={() => handleSwipe(right)}
      />
      <StyledCarouselContainer ref={carouselRef}>
        {productsArr.map((product) => (
          <Card
            product={product}
            translateValue={translateValue}
            key={product.title}
          />
        ))}
      </StyledCarouselContainer>
    </StyledCarouselSection>
  );
};

export default Carousel;
