import { useState } from 'react';

import { Flexbox } from '../styled/flexbox';
import IconButton from '../styled/icon-button';
import RangeSlider from './range-slider';

function PlayerRightSide() {
  const [volume, setVolume] = useState(0);
  return (
    <Flexbox flex="1" justify="center" align="center">
      <IconButton src="./assets/open-playlist.svg" alt="playlist" />
      <IconButton src="./assets/volume.svg" alt="vol" />
      <div>
        <RangeSlider
          onChange={(e) => setVolume(e.target.value)}
          min={0}
          max={100}
          value={volume}
          persentageRate={volume}
        />
      </div>
    </Flexbox>
  );
}

export default PlayerRightSide;
