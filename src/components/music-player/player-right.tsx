import { Flexbox } from '../styled/flexbox';
import IconButton from '../styled/icon-button';
import RangeSlider from './range-slider';

function PlayerRightSide() {
  return (
    <Flexbox flex="1" justify="center" align="center">
      <IconButton src="./assets/open-playlist.svg" alt="playlist" />
      <IconButton src="./assets/volume.svg" alt="vol" />
      <div>
        <RangeSlider
          min={0}
          max={300}
          value={150}
          thumbSize="12px"
          thumbColor="black"
          sliderColor="grey"
        />
      </div>
    </Flexbox>
  );
}

export default PlayerRightSide;
