import React, { useState } from 'react';
import styled from 'styled-components';

import SearchChannelList from '../../components/search/search-channel/search-channel-list';
import SearchSongsList from '../../components/search/search-songs/search-songs-list';
import SearchForm from './search-form';

const SearchListWrapper = styled.div`
  width: 85%;
  padding: 20px;
`;

function SearchPage() {
  const [formValue, setFormValue] = useState('');

  return (
    <div>
      <SearchForm hundleSubmit={setFormValue} />
      <SearchListWrapper>
        <SearchChannelList formValue={formValue} />
        <SearchSongsList formValue={formValue} />
      </SearchListWrapper>
    </div>
  );
}

export default SearchPage;
