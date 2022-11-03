import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { playSong, setSongIndex, setSongInfo } from '../../../../redux/player-slice';
import IconButton from '../../../styled/icon-button';

function PlayerBackButton() {
  const dispatch = useAppDispatch();
  const songId = useAppSelector((state) => state.player.songIndex);
  const playlist = useAppSelector((state) => state.player.playlist);

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
  return <IconButton src="./assets/player/back.svg" alt="back" onClick={hundleBack} />;
}

export default PlayerBackButton;
