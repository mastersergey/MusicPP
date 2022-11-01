import { useEffect, useState } from 'react';

import YT from '../../../api/youtube-api';
import { TChannelItem, TFormValueProp } from '../types';
import SearchChannelItem from './search-channel-item';

function SearchChannelList({ formValue }: TFormValueProp) {
  const [channel, setChannel] = useState([]);

  useEffect(() => {
    if (formValue) {
      YT.GET.CHANNEL(formValue).then((channel) => setChannel(channel));
    }
  }, [formValue]);

  return (
    <>
      {channel.map(({ id, snippet }: TChannelItem) => (
        <SearchChannelItem
          key={id.channelId}
          id={id.channelId}
          icon={snippet.thumbnails.medium.url}
          title={snippet.title}
          description={snippet.description}
        />
      ))}
    </>
  );
}

export default SearchChannelList;
