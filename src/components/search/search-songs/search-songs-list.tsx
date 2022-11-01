import { useEffect, useState } from 'react';

import YT from '../../../api/youtube-api';
import { TFormValueProp, TSongItem } from '../types';
import SearchSongItem from './search-songs-item';

function SearchSongsList({ formValue }: TFormValueProp) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (formValue) {
      YT.GET.SONGS(formValue, 10).then((songs) => setSongs(songs));
    }
  }, [formValue]);

  return (
    <>
      {songs[0] && (
        <div>
          <h2>Popular Releases</h2>
          {songs.map(({ id, snippet }: TSongItem) => (
            <SearchSongItem
              key={id}
              id={snippet.resourceId.videoId}
              icon={snippet.thumbnails.medium.url}
              title={snippet.title}
              channelTitle={snippet.videoOwnerChannelTitle}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default SearchSongsList;
