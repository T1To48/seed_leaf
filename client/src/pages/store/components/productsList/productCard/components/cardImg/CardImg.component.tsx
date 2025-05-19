import styled from "styled-components";
const StyledCardImg = styled.img`
  width: 90%;
  object-fit: cover;
  transform: scale(1.1);
  margin-top: -5rem;
  transition: transform 0.5s ease;
  @media (max-width: ${({ theme }) => theme.siteMaxWidth.mobile}) {
  width: 65%;
  transform: scale(1.3);
  }
`;

const CardImg = ({src}:{src:string}) => {
  return <StyledCardImg src={src} />;
};

export default CardImg;
