import { useEffect, useMemo, useState } from 'react';

import { TContentItem } from '../../../api/types';
import YT from '../../../api/youtube-api';
import { useAppDispatch } from '../../../redux/hooks';
import { setPlaylist } from '../../../redux/player-slice';
import { TPlaylistItem, TSongItem } from '../../search/types';
import ArtistSongsItem from './artist-songs-item';
import ArtistSongsLiked from './artist-songs-liked';
import { SongsWrapper, TopWrapper } from './styles';

function ArtistSongs({ artistName }: { artistName?: string }) {
  const [songs, setSongs] = useState<TSongItem[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof artistName !== 'undefined')
      YT.GET.SONGS(artistName, 15).then((songs) => setSongs(songs));
  }, [artistName]);

  const songsList = useMemo(() => {
    const list: TPlaylistItem[] = [];
    songs.forEach(({ snippet }: TSongItem) => {
      const listItem = {
        id: snippet.resourceId.videoId,
        songTitle: snippet.title,
        artistTitle: snippet.videoOwnerChannelTitle,
        songIcon: snippet.thumbnails.medium.url,
      };
      list.push(listItem);
    });
    return list;
  }, [songs]);

  return (
    <SongsWrapper>
      <div className="artist__songs-popular">
        <h2>Popular</h2>
        <TopWrapper onClick={() => dispatch(setPlaylist(songsList))}>
          {songs.map(
            (song: TContentItem, index) =>
              index <= 4 && (
                <ArtistSongsItem
                  key={song.id}
                  icon={song.snippet.thumbnails.medium.url}
                  title={song.snippet.title}
                  channelTitle={artistName}
                  number={index + 1}
                  id={song.snippet.resourceId.videoId}
                />
              ),
          )}
        </TopWrapper>
        <a>SEE MORE</a>
      </div>
      <ArtistSongsLiked />
    </SongsWrapper>
  );
}

export default ArtistSongs;
