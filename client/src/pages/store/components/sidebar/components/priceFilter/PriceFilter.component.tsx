import { useState } from "react";
import { useAppSelector } from "src/redux";
import { PriceContainer, MinMaxInputs,PriceRangeSlider } from "./components";
const PriceFilter = () => {
  const { isMobile } = useAppSelector((state) => state.ui);
  const [minMaxLimit, setMinMaxLimit] = useState([0, 100]);
  const [currentMinMax, setCurrentMinMax] = useState([0, 100]);
  const handlePriceRange = (newValue: number[] | number) => {
    setCurrentMinMax(newValue as number[]);
  };
  return (
    <PriceContainer>
      <MinMaxInputs currentMinMax={currentMinMax} />
      <PriceRangeSlider minMaxLimit={minMaxLimit} currentMinMax={currentMinMax} isMobile={isMobile} onChange={handlePriceRange} />
    </PriceContainer>
  );
};

export default PriceFilter;
