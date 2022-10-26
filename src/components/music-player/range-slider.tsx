import styled from 'styled-components';

type TStyledSlider = {
  thumbSize: string;
  sliderColor: string;
  thumbColor: string;
};

interface IRangeSlider extends TStyledSlider {
  min: number;
  max: number;
  value: number;
}

//#d3d3d3 - sliderColor
// #04aa6d - thumbColor
const StyledSlider = styled.input<TStyledSlider>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 10%;
  background: ${({ sliderColor }) => sliderColor};
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${({ thumbSize }) => thumbSize};
    height: ${({ thumbSize }) => thumbSize};
    border-radius: 50%;
    background: ${({ thumbColor }) => thumbColor};
    cursor: pointer;
  }
  &:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
`;

function RangeSlider({
  min,
  max,
  value,
  thumbColor,
  thumbSize,
  sliderColor,
}: IRangeSlider) {
  return (
    <StyledSlider
      type="range"
      min={min}
      max={max}
      value={value}
      thumbColor={thumbColor}
      thumbSize={thumbSize}
      sliderColor={sliderColor}
    />
  );
}

export default RangeSlider;
