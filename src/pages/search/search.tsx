import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import YT from '../../api/youtube-api';
import ChannelItem from '../../components/channel-item';
import SongItem from '../../components/song-item';
import SearchForm from './search-form';

const SearchListWrapper = styled.div`
  width: 85%;
  padding: 20px;
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
  const [songs, setSongs] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    if (formValue) {
      YT.GET.CHANNEL(formValue).then((channel) => setChannel(channel));
      YT.GET.SONGS(formValue, 10).then((songs) => setSongs(songs));
    }
  }, [formValue]);

  return (
    <div>
      <SearchForm hundleSubmit={setFormValue} />
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
        {songs[0] && (
          <div>
            <h2>Popular Releases</h2>
            {songs.map(({ id, snippet }: TSongItem) => (
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
