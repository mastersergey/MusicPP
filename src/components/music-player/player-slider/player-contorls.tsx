import { useAppSelector } from '../../../redux/hooks';
import { Flexbox } from '../../styled/flexbox';
import IconButton from '../../styled/icon-button';
import { TPlayerProp } from '../types';

function PlayerControls({ player }: TPlayerProp) {
  const playerState = useAppSelector((state) => state.player.playerState);
  function hundlePlay() {
    const isPlay = playerState === 1;
    if (player !== null) {
      isPlay ? player.pauseVideo() : player.playVideo();
    }
  }
  return (
    <Flexbox justify="center">
      <IconButton src="./assets/shuffle.svg" alt="shuffle" />
      <IconButton src="./assets/back.svg" alt="back" />
      <IconButton src="./assets/player-play.svg" alt="play" onClick={hundlePlay} />
      <IconButton src="./assets/forward.svg" alt="forward" />
    </Flexbox>
  );
}

export default PlayerControls;
