import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { playSong, setSongIndex, setSongInfo } from '../../../redux/player-slice';
import { Flexbox } from '../../styled/flexbox';
import IconButton from '../../styled/icon-button';
import { TPlayerProp } from '../types';

function PlayerControls({ player }: TPlayerProp) {
  const songId = useAppSelector((state) => state.player.songIndex);
  const playlist = useAppSelector((state) => state.player.playlist);
  const playerState = useAppSelector((state) => state.player.playerState);
  const isPlay = playerState === 1;
  const dispatch = useAppDispatch();
  function hundlePlay() {
    if (player !== null) {
      isPlay ? player.pauseVideo() : player.playVideo();
    }
  }
  function hundleForward() {
    const forwardSongIndex = songId + 1 >= playlist.length ? 0 : songId + 1;
    const forwardSong = playlist[forwardSongIndex].id;
    const { songTitle, artistTitle, songIcon } = playlist[forwardSongIndex];
    dispatch(
      setSongInfo({
        songTitle,
        artistTitle,
        songIcon,
      }),
    );
    dispatch(playSong(forwardSong));
    dispatch(setSongIndex(forwardSongIndex));
  }

  function hundleBack() {
    const lastSongIndex = playlist.length - 1;
    const backSongIndex = songId - 1 < 0 ? lastSongIndex : songId - 1;
    const backSong = playlist[backSongIndex].id;
    const { songTitle, artistTitle, songIcon } = playlist[backSongIndex];
    dispatch(
      setSongInfo({
        songTitle,
        artistTitle,
        songIcon,
      }),
    );
    dispatch(playSong(backSong));
    dispatch(setSongIndex(backSongIndex));
  }
  return (
    <Flexbox justify="center">
      <IconButton
        src="./assets/player/shuffle.svg"
        alt="shuffle"
        onClick={() => console.log('shuffle')}
      />
      <IconButton src="./assets/player/back.svg" alt="back" onClick={hundleBack} />
      <IconButton
        src={`./assets/player/${isPlay ? 'pause' : 'player-play'}.svg`}
        alt="play"
        onClick={hundlePlay}
      />
      <IconButton
        src="./assets/player/forward.svg"
        alt="forward"
        onClick={hundleForward}
      />
    </Flexbox>
  );
}

export default PlayerControls;
