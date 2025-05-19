import {
  StyledInputsContainer,
  StyledPriceInput,
  StyledHyphenIcon,
} from "./minMaxInputs.styles";

const MinMaxInputs = ({ currentMinMax }: { currentMinMax: number[] }) => {
  const [currentMin, currentMax] = currentMinMax;
  return (
    <StyledInputsContainer>
      <StyledPriceInput
        type="number"
        //   min={minLimit}
        //   max={maxLimit}
        value={currentMin}
        //   name="currentMin"
        //   step={step}
        //   onChange={handleStyledPriceInputChange}
        autoFocus={false}
        disabled={true}
      />
      <StyledHyphenIcon />
      <StyledPriceInput
        type="number"
        //   min={minLimit}
        //   max={maxLimit}
        value={currentMax}
        //   name="currentMax"
        //   step={step}
        //   onChange={handleInputChange}
        autoFocus={false}
        disabled={true}
      />
    </StyledInputsContainer>
  );
};

export default MinMaxInputs;
