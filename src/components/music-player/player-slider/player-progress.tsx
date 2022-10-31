import { useState } from 'react';

import { Flexbox } from '../../styled/flexbox';
import RangeSlider from '../range-slider';

function PlayerProgress() {
  const [rangeValue, setRangeValue] = useState(0);
  const min = 0;
  const max = 300;

  return (
    <Flexbox>
      <div>{rangeValue}</div>
      <RangeSlider
        onChange={(e) => setRangeValue(+e.target.value)}
        min={min}
        max={max}
        value={rangeValue}
        persentageRate={rangeValue / (max / 100) + 1}
      />
      <div>{max}</div>
    </Flexbox>
  );
}

export default PlayerProgress;
