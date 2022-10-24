import styled from 'styled-components';

import { Flexbox } from '../styled/flexbox';

const ArtistSongsItemWrapper = styled(Flexbox)`
  font-weight: 500;
  margin-bottom: 10px;
  width: 100%;
  transition: 0.1s linear;
  &:hover {
    color: green;
  }
`;

const ArtistSongsItemIcon = styled.img`
  margin: 0 10px;
  width: 70px;
  height: 70px;
`;

const TopWrapper = styled.div`
  padding-left: 50px;
  @media (max-width: 375px) {
    display: none;
  }
`;
const SongsWrapper = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  padding: 10px 50px;
  margin-bottom: 20px;
  @media (max-width: 1320px) {
    grid-template-columns: 90% 10%;
  }
`;

const LikedSongsWrapper = styled.div`
  padding-left: 50px;
  h2 {
    margin-bottom: 20px;
  }
  @media (max-width: 1320px) {
    display: none;
  }
`;
const LikedSongsInner = styled(Flexbox)`
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;

export {
  ArtistSongsItemIcon,
  ArtistSongsItemWrapper,
  LikedSongsInner,
  LikedSongsWrapper,
  SongsWrapper,
  TopWrapper,
};
