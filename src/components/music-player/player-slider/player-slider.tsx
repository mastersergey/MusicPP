import { Flexbox } from '../../styled/flexbox';
import PlayerControls from './player-contorls';
import PlayerProgress from './player-progress';

function PlayerSlider() {
  return (
    <Flexbox direction="column" justify="center" flex="2">
      <PlayerControls />
      <PlayerProgress />
    </Flexbox>
  );
}

export default PlayerSlider;
