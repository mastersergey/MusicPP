import styled from 'styled-components';

import { Flexbox } from '../styled/flexbox';
import PlayerLeftSide from './player-left';
import PlayerRightSide from './player-right';
import PlayerSlider from './player-slider/player-slider';

const PlayerWrapper = styled(Flexbox)`
  width: 100%;
  background-color: black;
  padding: 8px;
  max-heigth: 200px;
`;

function MusicPlayer() {
  return (
    <PlayerWrapper>
      <PlayerLeftSide />
      <PlayerSlider />
      <PlayerRightSide />
    </PlayerWrapper>
  );
}

export default MusicPlayer;
