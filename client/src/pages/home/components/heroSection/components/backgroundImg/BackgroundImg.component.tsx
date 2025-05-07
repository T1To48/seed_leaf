import styled from "styled-components";
import heroImg from "src/assets/hero_img.png";

const StyledHeroImg = styled.img`
  position: absolute;
  width: 100%;
  height: inherit;
  object-fit: cover;
  /* box-shadow: 0px 15px 15px rgba(200, 200, 200, 0.4); */
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
    /* height:37.2rem; */
    object-fit: cover;
  }
  top: 0;
  left: 0;
`;
const BackgroundImg = () => {
  return (
    <StyledHeroImg src={heroImg} />
  )
}

export default BackgroundImg