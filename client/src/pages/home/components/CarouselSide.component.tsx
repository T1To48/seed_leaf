import styled from "styled-components"
import { ChevronRightIcon } from "@heroicons/react/24/outline"

const StyledCarouselSide = styled.div`
  /* font-size: ${({ theme }) => theme.fontSize.medium.desktop}; */
  color:${({ theme }) => theme.color.text};
  width: 20vw;
  margin-top: 12rem;
  & > p{
    font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  color:${({ theme }) => theme.color.accent};
font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
  & p:first-child{
    font-size: ${({ theme }) => theme.fontSize.small.desktop};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    margin-bottom: 0.5rem;
  color:${({ theme }) => theme.color.text};

  }
  & h2{
    font-size: ${({ theme }) => theme.fontSize.large.desktop};
  }
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    margin:1rem auto ;
    margin-top: 5rem;
    width: 90%;
    & > p{
    font-size: ${({ theme }) => theme.fontSize.medium.mobile};
  }
  & p:first-child{
    font-size: ${({ theme }) => theme.fontSize.small.mobile};

  }
  & h2{
    font-size: ${({ theme }) => theme.fontSize.large.mobile};
  }
  & a{

  font-size: ${({ theme }) => theme.fontSize.small.mobile};
    & > :first-child{
      width: 1.5rem;
    }
  }
}
 

`
const StyledVisitLink = styled.a`
display: flex;
align-items: center;
color:${({ theme }) => theme.color.primary};
font-size: ${({ theme }) => theme.fontSize.small.desktop};
font-weight: ${({ theme }) => theme.fontWeight.semiBold};
margin-top: 1.2rem;
transition:0.3s ease-in-out;
width: fit-content;
letter-spacing: 0.5px;

&:hover{
color:${({ theme }) => theme.color.primary} ;
letter-spacing: 3px;

  }
  & > :first-child{
    width: 1.8rem;
    stroke-width:3px;
  }
 
`

const CarouselSide = () => {
  return (
    <StyledCarouselSide>
      <p>CHECK OUR</p>
      <h2>FEATURED PRODUCTS</h2>
      <p>Discover the power of nature's finest ingredients from fresh Microgreens to dry Herbs & Oils</p>
      <StyledVisitLink href="https://google.com">VISIT STORE<ChevronRightIcon /></StyledVisitLink>
    </StyledCarouselSide>
  )
}

export default CarouselSide