import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./priceSliderCssOverride.css";
import { MinusIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "src/redux";
const StyledPriceFilterWrapper = styled.div`
  /* padding: 0 1rem; */
  /* height: 50px; */
  width:90%;
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    width:100%;
  
  }
`;
const StyledFilterTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.medium.desktop};
  margin-bottom: 1rem;
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    margin-bottom: 0rem;
  }
`;

const StyledContentWrapper=styled.div`
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    padding: 1rem 0;
    margin: 0 auto;
    width: 70%;
  }
`

const StyledInputsContainer = styled.div`
  display: flex;
  justify-content: center;
  
  gap: 0.5rem;
  & > input {
    padding: 0.6rem ;
    text-align: center;
    width: 4.8rem;
    height:2.9rem;
    border-radius: ${({theme})=>theme.borderRadius.small};
    outline: none;
    color:${({theme})=>theme.color.text};
    font-size: ${({theme})=>theme.fontSize.small.desktop};
    font-weight: ${({theme})=>theme.fontWeight.semiBold};
    border: 1px solid ${({theme})=>theme.color.text};
    
    // hiding input type number arrow for
    // mozilla firefox browser
    -moz-appearance: textfield;

    // For safari and chrome
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0; 
      }

    &:focus{
      border: 2px solid ${({ theme }) => theme.color.primary};;
    }

    }
  & :nth-child(2) {
    width: 1.2rem;
    stroke-width: 0.35rem;
    color:${({theme})=>theme.color.text};
  }
  @media (max-width:${({ theme }) => theme.siteMaxWidth.mobile}){
    & input{
      font-size: ${({theme})=>theme.fontSize.medium.mobile};
    }
    & input:disabled{
      opacity: 1;
    }
  }

`;
const StyledRangeSliderContainer = styled.div`
  margin: 1rem 0;
`;
const StyledBtnContainer = styled.div`
text-align: center;

/* width: 100px; */
& button{
  width: 35%;
  padding:0.3rem;
  border-radius:${({theme})=>theme.borderRadius.medium} ;
  font-weight:${({theme})=>theme.fontWeight.semiBold} ;
  color:white;

  /* border:solid black 1px ; */
  background: black;
  border: none;
  &:disabled{
    background-color:${({theme})=>theme.color.text};
    opacity: 0.6;
  }
  }
`

const step=1
const PriceFilter = () => {
  const {isMobile} = useAppSelector((state)=>state.ui)
  const [[minLimit, maxLimit], setMinMaxLimit] = useState([0, 100]);
  const [currentMinMax, setCurrentMinMax] = useState([0, 100]);
  const handlePriceRange = (newValue: number[] | number) => {
    setCurrentMinMax(newValue as number[]);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const valueAsnumber = Number(value);
    if (
      (name === "currentMin" && valueAsnumber > currentMinMax[1]) ||
      (name === "currentMax" && valueAsnumber < currentMinMax[0])
    )
      return;
    setCurrentMinMax((preValue) => {
      const newValue =
        name === "currentMin"
          ? [valueAsnumber, preValue[1]]
          : [preValue[0], valueAsnumber];
      return newValue;
    });
  };
  return (
    <StyledPriceFilterWrapper>
      <StyledFilterTitle>Price:</StyledFilterTitle>
      <StyledContentWrapper>
      <StyledInputsContainer>
        <input
          type="number"
          min={minLimit}
          max={maxLimit}
          value={currentMinMax[0]}
          name="currentMin"
          step={step}
          onChange={handleInputChange}
          autoFocus={false}
          disabled={isMobile}
        />
        <MinusIcon />
        <input
          type="number"
          min={minLimit}
          max={maxLimit}
          value={currentMinMax[1]}
          name="currentMax"
          step={step}
          onChange={handleInputChange}
          autoFocus={false}
          disabled={isMobile}


        />
      </StyledInputsContainer>
      <StyledRangeSliderContainer>
        <Slider
          range
          min={minLimit}
          max={maxLimit}
          step={step}
          allowCross={false}
          value={currentMinMax}
          onChange={handlePriceRange}
          handleStyle={{
            // borderColor:"red",
            height:isMobile?22: 15,
            width:isMobile?22: 15,
            backgroundColor: "#4CAF50",
            opacity: 1,
            border: "none",
            boxShadow:"none",
            marginBottom:"8px",
          }}
          trackStyle={[
            { backgroundColor: "#4CAF50", height:isMobile?6: 4,marginTop:isMobile?2:0 },
          ]}
          railStyle={{ backgroundColor: "#fffff", height:isMobile?6: 4,marginTop:isMobile?2:0 }}
        />
      </StyledRangeSliderContainer>
      {
        !isMobile &&<StyledBtnContainer>
        <button disabled={true}>ok</button>
      </StyledBtnContainer>
      }
      
      </StyledContentWrapper>
    </StyledPriceFilterWrapper>
  );
};

export default PriceFilter;
