import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { playSong, setSongIndex, setSongInfo } from '../../../../redux/player-slice';
import IconButton from '../../../styled/icon-button';

function PlayerForwardButton() {
  const songId = useAppSelector((state) => state.player.songIndex);
  const playlist = useAppSelector((state) => state.player.playlist);
  const dispatch = useAppDispatch();
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
  return (
    <IconButton src="./assets/player/forward.svg" alt="forward" onClick={hundleForward} />
  );
}

export default PlayerForwardButton;
