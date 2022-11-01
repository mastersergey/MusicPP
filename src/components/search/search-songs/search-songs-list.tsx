import { useEffect, useMemo, useState } from 'react';

import YT from '../../../api/youtube-api';
import { TFormValueProp, TPlaylistItem, TSongItem } from '../types';
import SearchSongItem from './search-songs-item';

function SearchSongsList({ formValue }: TFormValueProp) {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    if (formValue) {
      YT.GET.SONGS(formValue, 10).then((songs) => setSongs(songs));
    }
  }, [formValue]);

  const songsIdList = useMemo(() => {
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
    <>
      {songs[0] && (
        <div>
          <h2>Popular Releases</h2>
          {songs.map(({ id, snippet }: TSongItem) => (
            <SearchSongItem
              playlist={songsIdList}
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
