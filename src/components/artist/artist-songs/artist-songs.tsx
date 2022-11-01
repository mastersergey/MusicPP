import { useEffect, useState } from 'react';

import { TContentItem } from '../../../api/types';
import YT from '../../../api/youtube-api';
import ArtistSongsItem from './artist-songs-item';
import ArtistSongsLiked from './artist-songs-liked';
import { SongsWrapper, TopWrapper } from './styles';

function ArtistSongs({ artistName }: { artistName?: string }) {
  const [songsList, setSongsList] = useState<TContentItem[]>([]);

  useEffect(() => {
    if (typeof artistName !== 'undefined')
      YT.GET.SONGS(artistName, 5).then((songs) => setSongsList(songs));
  }, [artistName]);

  return (
    <SongsWrapper>
      <div className="artist__songs-popular">
        <h2>Popular</h2>
        <TopWrapper>
          {songsList.map((song: TContentItem, index) => (
            <ArtistSongsItem
              key={song.id}
              icon={song.snippet.thumbnails.high.url}
              title={song.snippet.title}
              number={index + 1}
            />
          ))}
        </TopWrapper>
        <a>SEE MORE</a>
      </div>
      <ArtistSongsLiked />
    </SongsWrapper>
  );
}

export default ArtistSongs;
