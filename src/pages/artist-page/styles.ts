import styled from 'styled-components';

import { Flexbox } from '../../components/styled/flexbox';

const BannerWrapper = styled(Flexbox)`
  background-image: url(${(props) => props.theme});
  background-repeat: no-repeat;
  background-position: center;
  height: 15%;
  width: 100%;
`;

const ArtistTitle = styled.h1`
  font-size: 80px;
  @media (max-width: 930px) {
    font-size: 70px;
  }
  @media (max-width: 830px) {
    font-size: 40px;
  }
`;

export { ArtistTitle, BannerWrapper };
