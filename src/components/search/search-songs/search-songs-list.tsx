/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useMemo, useState } from 'react';

import YT from '../../../api/youtube-api';
import { useAppDispatch } from '../../../redux/hooks';
import { setPlaylist } from '../../../redux/player-slice';
import { TFormValueProp, TPlaylistItem, TSongItem } from '../types';
import SearchSongItem from './search-songs-item';

function SearchSongsList({ formValue }: TFormValueProp) {
  const [songs, setSongs] = useState([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (formValue) {
      YT.GET.SONGS(formValue, 10).then((songs) => setSongs(songs));
    }
  }, [formValue]);

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

  return songs[0] ? (
    <>
      <h2>Popular Releases</h2>
      <div onClick={() => dispatch(setPlaylist(songsList))}>
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
    </>
  ) : null;
}

export default SearchSongsList;
