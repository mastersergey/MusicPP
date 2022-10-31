import { Flexbox } from '../../styled/flexbox';
import { TPlayerProp } from '../types';
import PlayerControls from './player-contorls';
import PlayerProgress from './player-progress';

function PlayerSlider({ player }: TPlayerProp) {
  return (
    <Flexbox direction="column" justify="center" flex="2">
      <PlayerControls player={player} />
      <PlayerProgress />
    </Flexbox>
  );
}

export default PlayerSlider;
