import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { TPageInfoResponse } from '../../api/types';
import YT from '../../api/youtube-api';
import ArtistAlbums from '../../components/artist-albums/artist-albums';
import ArtistSongs from '../../components/artist-songs/artist-songs';
import ArtistStatus from '../../components/artist-status/artist-status';
import { ArtistTitle, BannerWrapper } from './styles';

function ArtistPage() {
  const params = useParams();
  const [pageInfo, setPageInfo] = useState<TPageInfoResponse>({});

  useEffect(() => {
    YT.GET.ARTIST_INFO(params.artistId).then((info) => setPageInfo(info));
  }, [params.artistId]);

  return (
    pageInfo && (
      <div>
        <BannerWrapper justify="flex-end" direction="column" theme={pageInfo.banner} />
        <ArtistTitle>{pageInfo.title}</ArtistTitle>
        <p>{pageInfo.subscribersCount} subscribers</p>
        <ArtistStatus />
        <ArtistSongs artistName={pageInfo.title} />
        <ArtistAlbums artistId={params.artistId} />
      </div>
    )
  );
}

export default ArtistPage;
