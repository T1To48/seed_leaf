import Slider from "rc-slider";
import { StyledRangeSliderContainer } from "./priceRangeSlider.styles";
import type { IsMobileBool } from "src/types";
import "rc-slider/assets/index.css";
import "./priceSliderCssOverride.css"
const step = 0.5;
const PriceRangeSlider = ({
  minMaxLimit,
  currentMinMax,
  isMobile,
  onChange,
}: {
  minMaxLimit: number[];
  currentMinMax: number[];
  isMobile: IsMobileBool;
  onChange: (newValue: number[] | number) => void;
}) => {
  const [minLimit, maxLimit] = minMaxLimit;
  return (
    <StyledRangeSliderContainer>
      <Slider
        range
        min={minLimit}
        max={maxLimit}
        step={step}
        allowCross={false}
        value={currentMinMax}
        onChange={onChange}
        handleStyle={{
          // borderColor:"red",
          height: isMobile ? 22 : 15,
          width: isMobile ? 22 : 15,
          backgroundColor: "#4CAF50",
          opacity: 1,
          border: "none",
          boxShadow: "none",
          marginBottom: "8px",
        }}
        trackStyle={[
          {
            backgroundColor: "#4CAF50",
            height: isMobile ? 6 : 4,
            marginTop: isMobile ? 2 : 0,
          },
        ]}
        railStyle={{
          backgroundColor: "#fffff",
          height: isMobile ? 6 : 4,
          marginTop: isMobile ? 2 : 0,
        }}
      />
    </StyledRangeSliderContainer>
  );
};

export default PriceRangeSlider;
