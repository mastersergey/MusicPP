import React, { useState } from 'react';
import styled from 'styled-components';

import YT from '../../api/youtube-api';
import ChannelItem from '../../components/channel-item';
import SongItem from '../../components/song-item';
import SearchForm from './search-form';

const SearchListWrapper = styled.div`
  padding: 50px;
`;

type TChannelItem = {
  id: {
    channelId: string;
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

type TSongItem = {
  id: string;
  snippet: {
    playlistId: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      medium: {
        url: string;
      };
    };
    videoOwnerChannelTitle: string;
    title: string;
  };
};

function SearchPage() {
  const [channel, setChannel] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  async function onFormSubmit(inputValue: string) {
    const searchedChannel = await YT.GET.CHANNEL(inputValue);
    const searchedPlaylist = await YT.GET.SONGS(inputValue, 10);
    setChannel(searchedChannel);
    setPlaylist(searchedPlaylist);
  }

  return (
    <div>
      <SearchForm onFormSubmit={onFormSubmit} />
      <SearchListWrapper>
        {channel.map(({ id, snippet }: TChannelItem) => (
          <ChannelItem
            key={id.channelId}
            id={id.channelId}
            icon={snippet.thumbnails.medium.url}
            title={snippet.title}
            description={snippet.description}
          />
        ))}
        {playlist[0] && (
          <div>
            <h2>Popular Releases</h2>
            {playlist.map(({ id, snippet }: TSongItem) => (
              <SongItem
                key={id}
                id={id}
                icon={snippet.thumbnails.medium.url}
                title={snippet.title}
              />
            ))}
          </div>
        )}
      </SearchListWrapper>
    </div>
  );
}

export default SearchPage;
