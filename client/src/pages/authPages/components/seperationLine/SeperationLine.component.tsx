import { StyledLine } from "./seperationLine.styles";
const SeperationLine = ({ text }: { text: string }) => {
  return (
    <StyledLine>
      <span></span>
      <p>{text} Customer?</p>
      <span></span>
    </StyledLine>
  );
};

export default SeperationLine;
