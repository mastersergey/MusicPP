import { useAppSelector } from '../../../../redux/hooks';
import IconButton from '../../../styled/icon-button';
import { TPlayerProp } from '../../types';

function PlayerPlayButton({ player }: TPlayerProp) {
  const playerState = useAppSelector((state) => state.player.playerState);
  const isPlay = playerState === 1;
  function hundlePlay() {
    if (player !== null) {
      isPlay ? player.pauseVideo() : player.playVideo();
    }
  }
  return (
    <IconButton
      src={`../assets/player/${isPlay ? 'pause' : 'player-play'}.svg`}
      alt="play"
      onClick={hundlePlay}
    />
  );
}

export default PlayerPlayButton;
