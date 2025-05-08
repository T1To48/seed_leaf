import { StyledFactWrapper } from "./factCard.styles";
import { FactLogo, FactTitle, FactText } from "./components";
const FactCard = ({fact}:{fact:{title:string;text:string}}) => {
    const {title,text}=fact
  return (
    <StyledFactWrapper>
      <FactLogo />
      <FactTitle >{title}</FactTitle>
      <FactText >{text}</FactText>
    </StyledFactWrapper>
  );
};

export default FactCard;
