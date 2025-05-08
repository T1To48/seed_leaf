import styled from "styled-components";
import logoImg from "src/assets/logo_green_no_bg.png";

const StyledFactLogo = styled.img`
  width: 6rem;
  padding: 1rem;
  padding-right: 0.3rem;
  background: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.1);
`;
const FactLogo = () => {
  return <StyledFactLogo src={logoImg} />;
};

export default FactLogo;
