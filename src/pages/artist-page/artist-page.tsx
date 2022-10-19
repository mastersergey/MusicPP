import './artist-page.scss';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import YT from '../../api/youtube-api';
import { Flexbox } from '../../components/styled/flexbox';
import StyledButton from '../../components/styled/styled-button';

const ResponiveContainer = styled.div`
  height: 110vh;
  @media (max-height: 1100px) {
    height: 120vh;
  }
  @media (max-height: 1000px) {
    height: 130vh;
  }
  @media (max-height: 900px) {
    height: 150vh;
  }
  @media (max-height: 800px) {
    height: 165vh;
  }
  @media (max-height: 700px) {
    height: 175vh;
  }
`;

const HeaderWrapper = styled(Flexbox)`
  background-image: url(${(props) => props.theme});
  background-repeat: no-repeat;
  background-position: center;
  height: 20%;
  width: 100%;
`;

const HeaderTitle = styled.h1`
  font-size: 80px;
  @media (max-width: 930px) {
    font-size: 70px;
  }
  @media (max-width: 830px) {
    font-size: 40px;
  }
`;

const StatusWrapper = styled(Flexbox)`
  padding: 20px 50px;
  align-items: center;
  @media (max-width: 1320px) {
    justify-content: space-between;
  }
`;

const FollowButton = styled(StyledButton)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
`;

type TPageInfoResponse = {
  banner?: string;
  title?: string;
  subscribersCount?: string;
};

type TContentItem = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};

function ArtistPage() {
  const params = useParams();
  const [pageInfo, setPageInfo] = useState<TPageInfoResponse>({});
  const [albumsList, setAlbumsList] = useState<TContentItem[]>([]);
  const [songsList, setSongsList] = useState<TContentItem[]>([]);

  useEffect(() => {
    YT.GET.ARTIST_INFO(params.artistId).then((info) => setPageInfo(info));
    YT.GET.ALBUMS(params.artistId).then((albums) => setAlbumsList(albums));
  }, [params]);

  useEffect(() => {
    YT.GET.SONGS(pageInfo.title, 5).then((songs) => setSongsList(songs));
  }, [pageInfo]);

  return (
    <ResponiveContainer>
      {pageInfo.banner && (
        <HeaderWrapper justify="flex-end" direction="column" theme={pageInfo.banner} />
      )}
      <HeaderTitle>{pageInfo.title}</HeaderTitle>
      <p>{pageInfo.subscribersCount} subscribers</p>
      <StatusWrapper>
        <a style={{ marginRight: '30px' }}>
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="28" cy="28" r="28" fill="#1DB954" />
            <path d="M21 38.5L39.375 28L21 17.5V38.5Z" fill="white" />
          </svg>
        </a>
        <div>
          <FollowButton>FOLLOWING</FollowButton>
        </div>
      </StatusWrapper>
      <div className="artist__songs">
        <div className="artist__songs-popular">
          <h2>Popular</h2>
          <div className="artist__songs-popular-top">
            {songsList.map((song: TContentItem, index) => (
              <div className="artist__songs-popular-top-item" key={song.id}>
                <div className="artist__songs-popular-top-item-icon">
                  <p>{index + 1}</p>
                  <img alt="p" src={song.snippet.thumbnails.high.url}></img>
                </div>
                <div className="artist__songs-popular-top-item-inner">
                  <span className="track">{song.snippet.title}</span>
                  <span className="timecode">03:33</span>
                </div>
              </div>
            ))}
          </div>
          <a>SEE MORE</a>
        </div>
        <div className="artist__songs-liked">
          <h2>Liked Songs</h2>
          <div className="artist__songs-liked-inner">
            <img src="/assets/albom.jpg" alt="p" />
            <div>
              <h2>Youve liked 4 songs</h2>
              <p>by Twenty One Pilots</p>
            </div>
          </div>
        </div>
      </div>
      <div className="artist__alboms">
        <h2 className="artist__alboms-title">Popular releases</h2>
        <div className="artist__alboms-list">
          {albumsList.map((album: TContentItem) => (
            <div key={album.id} className="artist__alboms-list-item">
              <img src={album.snippet.thumbnails.high.url} alt="p" />
              <div>
                <p>{album.snippet.title}</p>
                <p>2015</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ResponiveContainer>
  );
}

export default ArtistPage;
