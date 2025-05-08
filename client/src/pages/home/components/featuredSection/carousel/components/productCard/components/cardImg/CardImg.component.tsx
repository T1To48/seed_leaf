import styled from "styled-components";

const StyledCardImg = styled.img`
  width: 100%;
  object-fit: cover;
  /* transform: scale(1); */
  transition: transform 0.2s ease-in;
`;
const CardImg = ({src}: {src:string}) => {
  return <StyledCardImg src={src} />;
};

export default CardImg;
