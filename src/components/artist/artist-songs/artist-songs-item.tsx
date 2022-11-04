import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { playSong, setSongIndex, setSongInfo } from '../../../redux/player-slice';
import { Flexbox } from '../../styled/flexbox';
import { ArtistSongsItemIcon, ArtistSongsItemWrapper } from './styles';

type TArtistSongsItemProp = {
  icon: string;
  number: number;
  title: string;
  id: string;
  channelTitle?: string;
};

function ArtistSongsItem({
  icon,
  number,
  title,
  id,
  channelTitle,
}: TArtistSongsItemProp) {
  const dispatch = useAppDispatch();
  const playlist = useAppSelector(({ player }) => player.playlist);
  const songIndexInPlaylist = playlist.findIndex((item) => item.id === id);

  return (
    <ArtistSongsItemWrapper
      align="center"
      onClick={() => {
        dispatch(playSong(id));
        dispatch(setSongIndex(songIndexInPlaylist));
        dispatch(
          setSongInfo({
            songTitle: title,
            artistTitle: channelTitle,
            songIcon: icon,
          }),
        );
      }}
    >
      <Flexbox justify="space-between" align="center">
        <span>{number}</span>
        <ArtistSongsItemIcon alt="p" src={icon} />
      </Flexbox>
      <span>{title}</span>
    </ArtistSongsItemWrapper>
  );
}

export default ArtistSongsItem;
