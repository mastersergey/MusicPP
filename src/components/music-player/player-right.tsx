import { ChangeEvent, useEffect, useState } from 'react';

import { Flexbox } from '../styled/flexbox';
import IconButton from '../styled/icon-button';
import RangeSlider from './range-slider';
import { IPlayerRightProp } from './types';

function PlayerRightSide({ player, toggleClip, isClipOpen }: IPlayerRightProp) {
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    player?.setVolume(volume);
  }, [volume]);

  function handleChangeVolume(e: ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    setVolume(value);
  }

  function handleMute() {
    if (player?.isMuted()) {
      player.unMute();
      setVolume(30);
    } else {
      player?.mute();
      setVolume(0);
    }
  }

  return (
    <Flexbox flex="1" justify="center" align="center">
      <IconButton
        src="./assets/player/show-video.svg"
        alt="show video"
        onClick={() => toggleClip(!isClipOpen)}
      />
      <IconButton
        src="./assets/player/open-playlist.svg"
        alt="playlist"
        onClick={() => console.log('click')}
      />
      <IconButton src={`./assets/player/volume.svg`} alt="vol" onClick={handleMute} />
      <div>
        <RangeSlider
          onChange={handleChangeVolume}
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
