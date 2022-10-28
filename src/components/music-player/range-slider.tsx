import styled from 'styled-components';

type TStyledSlider = {
  persentageRate: number;
};

interface IRangeSlider extends TStyledSlider {
  min: number;
  max: number;
  value: number;
  onChange: (e: any) => void;
}

const StyledSlider = styled.input<TStyledSlider>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 10%;
  background: ${({ persentageRate }) =>
    `linear-gradient(90deg, grey ${persentageRate}%, white ${persentageRate}%)`};
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: grey;
    cursor: pointer;
  }
  &:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }
`;

function RangeSlider({ min, max, value, persentageRate, onChange }: IRangeSlider) {
  return (
    <StyledSlider
      onChange={onChange}
      type="range"
      min={min}
      max={max}
      value={value}
      persentageRate={persentageRate}
    />
  );
}

export default RangeSlider;
