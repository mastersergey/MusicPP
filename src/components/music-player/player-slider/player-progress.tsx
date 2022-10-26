import { Flexbox } from '../../styled/flexbox';
import RangeSlider from '../range-slider';

function PlayerProgress() {
  return (
    <Flexbox>
      <div>00</div>
      <RangeSlider
        min={0}
        max={300}
        value={150}
        thumbColor="#04aa6d"
        thumbSize="18px"
        sliderColor="#d3d3d3"
      />
      <div>300</div>
    </Flexbox>
  );
}

export default PlayerProgress;
