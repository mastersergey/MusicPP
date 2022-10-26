import { Flexbox } from '../../styled/flexbox';
import IconButton from '../../styled/icon-button';

function PlayerControls() {
  return (
    <Flexbox justify="center">
      <IconButton src="./assets/shuffle.svg" alt="shuffle" />
      <IconButton src="./assets/back.svg" alt="back" />
      <IconButton src="./assets/player-play.svg" alt="play" />
      <IconButton src="./assets/forward.svg" alt="forward" />
    </Flexbox>
  );
}

export default PlayerControls;
