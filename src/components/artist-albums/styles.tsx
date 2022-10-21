import styled from 'styled-components';

import { Flexbox } from '../styled/flexbox';

const ArtistAlbumsItemWrapper = styled(Flexbox)`
  padding: 12px 12px;
  margin-right: 20px;
  margin-bottom: 20px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  width: 70%;
  img {
    width: 120px;
    height: 90px;
    border-radius: 5%;
    margin-right: 20px;
  }
  p {
    margin: 0;
  }
  @media (max-width: 920px) {
    width: 100%;
  }
`;

const ArtistAlbumsTitle = styled.h2`
  margin-bottom: 10px;
`;

export { ArtistAlbumsItemWrapper, ArtistAlbumsTitle };
