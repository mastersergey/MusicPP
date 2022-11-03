import { Flexbox } from '../../../styled/flexbox';
import { TPlayerProp } from '../../types';
import PlayerBackButton from './player-back-button';
import PlayerForwardButton from './player-forward-button';
import PlayerPlayButton from './player-play-button';
import PlayerShuffleButton from './player-shuffle-button';

function PlayerControls({ player }: TPlayerProp) {
  return (
    <Flexbox justify="center">
      <PlayerShuffleButton />
      <PlayerBackButton />
      <PlayerPlayButton player={player} />
      <PlayerForwardButton />
    </Flexbox>
  );
}

export default PlayerControls;
