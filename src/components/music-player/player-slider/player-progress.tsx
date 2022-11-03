import { useState } from 'react';

import { Flexbox } from '../../styled/flexbox';
import RangeSlider from '../range-slider';
import { TPlayerProp } from '../types';

function formatVideoDuration(duration: number | undefined) {
  if (duration) {
    const durationNumber = duration / 60;
    const minutes = Math.floor(durationNumber);
    const seconds = Math.floor((durationNumber - minutes) * 6 * 10);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds}`;
  }
}

function PlayerProgress({ player }: TPlayerProp) {
  const [rangeValue, setRangeValue] = useState(0);
  const videoDuration = player?.getDuration();
  const min = 0;
  const max = 300;

  return (
    <Flexbox>
      <div>{0}</div>
      <RangeSlider
        onChange={(e) => setRangeValue(+e.target.value)}
        min={min}
        max={max}
        value={rangeValue}
        persentageRate={rangeValue / (max / 100) + 1}
      />
      <div>{formatVideoDuration(videoDuration)}</div>
    </Flexbox>
  );
}

export default PlayerProgress;
