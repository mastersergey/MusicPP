import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { TContentItem } from '../../api/types';
import YT from '../../api/youtube-api';
import { Flexbox } from '../styled/flexbox';
import ArtistAlbumsItem from './artist-albums-item';
import { ArtistAlbumsTitle } from './styles';

const AlbumsWrapper = styled(Flexbox)`
  padding-bottom: 100px;
`;

function ArtistAlbums({ artistId }: { artistId?: string }) {
  const [albums, setAlbums] = useState<TContentItem[]>([]);

  useEffect(() => {
    YT.GET.ALBUMS(artistId).then((albums) => setAlbums(albums));
  }, [artistId]);

  return (
    <div>
      <ArtistAlbumsTitle>Popular releases</ArtistAlbumsTitle>
      <AlbumsWrapper direction="column" align="start">
        {albums.map((album: TContentItem) => (
          <ArtistAlbumsItem
            key={album.id}
            icon={album.snippet.thumbnails.high.url}
            title={album.snippet.title}
          />
        ))}
      </AlbumsWrapper>
    </div>
  );
}

export default ArtistAlbums;
