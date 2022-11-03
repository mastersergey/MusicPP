import { memo } from 'react';

import { Flexbox } from '../../styled/flexbox';
import { TPlayerProp } from '../types';
import PlayerControls from './player-controls/player-contorls';
import PlayerProgress from './player-progress';

const PlayerSlider = memo(function PlayerSlider({ player }: TPlayerProp) {
  return (
    <Flexbox direction="column" justify="center" flex="2">
      <PlayerControls player={player} />
      <PlayerProgress player={player} />
    </Flexbox>
  );
});

export default PlayerSlider;
