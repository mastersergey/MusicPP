import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { playSong, setSongIndex, setSongInfo } from '../../../redux/player-slice';
import { Flexbox } from '../../styled/flexbox';
import StyledIcon from '../../styled/styled-icon';

export type SongItemProp = {
  icon: string;
  title: string;
  id: string;
  channelTitle: string;
};

const SongWrapper = styled(Flexbox)`
  width: 100%;
  padding: 10px 40px;
  border-radius: 10px;
  cursor: pointer;
`;

const SongTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

function SearchSongItem({ icon, title, id, channelTitle }: SongItemProp) {
  const dispatch = useAppDispatch();
  const playlist = useAppSelector(({ player }) => player.playlist);
  const songIndexInPlaylist = playlist.findIndex((item) => item.id === id);

  return (
    <SongWrapper
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
      <StyledIcon src={icon} alt="icon" />
      <div>
        <SongTitle>{title}</SongTitle>
        <SongTitle>{channelTitle}</SongTitle>
      </div>
    </SongWrapper>
  );
}

export default SearchSongItem;
