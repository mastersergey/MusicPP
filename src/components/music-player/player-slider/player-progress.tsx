import { useEffect, useState } from 'react';

import { useAppSelector } from '../../../redux/hooks';
import { Flexbox } from '../../styled/flexbox';
import RangeSlider from '../range-slider';
import { TPlayerProp } from '../types';

function formatDuration(duration: number | undefined) {
  if (duration) {
    const durationNumber = duration / 60;
    const minutes = Math.floor(durationNumber);
    const seconds = Math.floor((durationNumber - minutes) * 6 * 10);
    const timeFormat = (time: number) => (time < 10 ? '0' + time : time);
    return `${timeFormat(minutes)}:${timeFormat(seconds)}`;
  }
}

function PlayerProgress({ player }: TPlayerProp) {
  const [rangeValue, setRangeValue] = useState(0);
  const playerState = useAppSelector(({ player }) => player.playerState);
  const videoDuration = player?.getDuration();

  useEffect(() => {
    const isPlay = playerState === 1;
    if (isPlay) {
      const setTime = setInterval(() => {
        console.log('tick');
        const currentTime = player?.getCurrentTime();
        if (currentTime) setRangeValue(currentTime);
      }, 1000);
      return () => clearInterval(setTime);
    }
  }, [playerState]);

  return (
    <Flexbox>
      <div>{formatDuration(rangeValue)}</div>
      <RangeSlider
        onChange={(e) => setRangeValue(+e.target.value)}
        min={0}
        max={videoDuration}
        value={rangeValue}
        persentageRate={rangeValue / ((videoDuration || 100) / 100) + 1}
      />
      <div>{formatDuration(videoDuration)}</div>
    </Flexbox>
  );
}

export default PlayerProgress;
