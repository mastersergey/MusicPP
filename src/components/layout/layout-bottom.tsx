import styled from 'styled-components';

import MobileMenu from '../mobile-menu/mobile-menu';
import MusicPlayer from '../music-player/music-player';

const BottomWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

function LayoutBottom() {
  return (
    <BottomWrapper>
      <MusicPlayer />
      <MobileMenu />
    </BottomWrapper>
  );
}

export default LayoutBottom;
