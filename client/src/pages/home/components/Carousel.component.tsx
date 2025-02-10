import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { cards } from "./cards";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline"
import { useAppSelector } from "src/redux";

const StyledCarouselSection = styled.section`
position:relative;
max-width: 90rem;
padding: 0 4rem;
margin-bottom: 5rem;
@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
  padding: 0 1rem;


}
`

const StyledCarouselContainer = styled.div`
display: flex;
align-items: center;
gap: 3rem;
padding:4rem;
max-height: 45rem;
width: 100%;
overflow: hidden;
@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
padding:4rem 1rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;  //For smoother scrolling on iOS Devices
 scroll-behavior: smooth;
  &::-webkit-scrollbar {
  display: none;
}
}
`

const StyledCarouselCard = styled.div<{ $translateValue: number }>`
overflow: hidden;
cursor: pointer;

display: flex;
flex-direction: column;
flex: 0 0 30%;
align-items: center;
text-align: center;
width:100%;
/* height: 100%; */
aspect-ratio: 10/14;
transform: translateX(calc(${({ $translateValue }) => $translateValue}% + ${({ $translateValue }) => $translateValue === 0 ? 0 : $translateValue / 100 * 3 + 0.5}rem) );
transition: transform 0.5s ease-in-out;
box-shadow:0 .5rem 1.2rem rgba(0, 0, 0, 0.10);
border-radius: ${({ theme }) => theme.borderRadius.small};


&:hover{
  & img{
    transform: translateY(-15px) scale(1.2);
  }
  & h2::before{
    width: 90%;
  }
}

& h2{
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  position: relative;
width:fit-content;
  &::before{
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.color.primary};
    bottom:0px;
    left:50%;
    width:0;
    height:1.5px;
    transition:width 0.3s ease-out, left 0.3s ease-out;
    transform: translateX(-50%);
  }
  
}

& h4{
  font-size: ${({ theme }) => theme.fontSize.small.desktop};
}

@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
flex: 0 0 calc(50% - 2rem);
/* flex: 0 0 30vw; */
& h2{
  font-size: ${({ theme }) => theme.fontSize.medium.mobile};

}
& h4{
  font-size: ${({ theme }) => theme.fontSize.small.mobile};

}
}

`
const StyledCardImg = styled.img`
width:100%;
object-fit: cover;
/* transform: scale(1); */
transition:transform 0.2s ease-in;

`
const StyledCardContent = styled.div`
position: relative;
z-index: 5;
  color:${({ theme }) => theme.color.text};
`

const StyledCarouselBtnWrapper = styled.div<{ $side: "left" | "right" }>`
  width: 7rem;
  height: 90%;
  position: absolute;
  top:0;
  z-index:10;
${({ $side }) => $side}:0;
@media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
display: none;
}
/* left:0 */
`
const StyledCarouselButton = styled.button<{ $isHidden: boolean, $side: "left" | "right" }>`
  display: flex;
  opacity: ${({ $isHidden }) => $isHidden ? "0" : "1"};
  transition: opacity 0.5s ease;
  
  border: none;
  background: ${({theme})=>theme.color.background};
  
  padding: 1rem;
  box-shadow:  0px 8px 20px rgba(0,0,0,0.2);
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  position: absolute;
  top:50%;
  z-index:10;
  ${({ $side }) => $side}:0rem;
  & > :first-child{
    width: 2.5rem;
    stroke-width:3px;
  };
 
`


const Carousel = () => {
  const isMobile=useAppSelector((state)=>state.ui.isMobile)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef=useRef<HTMLDivElement|null>(null)
  const translateValue = -currentIndex * (100);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }
  const handleNext = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  useEffect(()=>{
    const carousel=carouselRef?.current;
    if (carousel) carousel.scrollLeft = 0;
    setCurrentIndex(0)
  },[isMobile])

  return (
    <StyledCarouselSection>

      <StyledCarouselBtnWrapper $side="left">
          <StyledCarouselButton $side="left" $isHidden={currentIndex === 0} onClick={handlePrev}>
            <ChevronLeftIcon />
          </StyledCarouselButton>
      </StyledCarouselBtnWrapper>

      <StyledCarouselBtnWrapper $side="right">
        <StyledCarouselButton $side="right" $isHidden={currentIndex === cards.length - 3} onClick={handleNext}>
          <ChevronRightIcon />
        </StyledCarouselButton>
      </StyledCarouselBtnWrapper>

      <StyledCarouselContainer ref={carouselRef}>
        {
          cards.map((card) =>
          (<StyledCarouselCard key={card.title} $translateValue={translateValue}>
            <StyledCardImg src={card.img} />
            <StyledCardContent>
              <h2>{card.title}</h2>
              <h4>{card.price}</h4>
            </StyledCardContent>
          </StyledCarouselCard>)
          )
        }
      </StyledCarouselContainer>

    </StyledCarouselSection>
  )
}

export default Carousel