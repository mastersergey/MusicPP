import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAppSelector } from '../../redux/hooks';
import { Flexbox } from '../styled/flexbox';
import PlayerLeftSide from './player-left';
import PlayerRightSide from './player-right';
import PlayerSlider from './player-slider/player-slider';
import { TPlayer } from './types';
import Video from './video/video';

const PlayerWrapper = styled(Flexbox)`
  width: 100%;
  background-color: black;
  padding: 8px;
  max-heigth: 200px;
`;

function MusicPlayer() {
  const { showPlayer } = useAppSelector((state) => state.player);
  const [player, setPlayer] = useState<TPlayer>(null);

  return (
    showPlayer && (
      <>
        <Video setPlayer={setPlayer} />
        <PlayerWrapper>
          <PlayerLeftSide />
          <PlayerSlider player={player} />
          <PlayerRightSide player={player} />
        </PlayerWrapper>
      </>
    )
  );
}

export default MusicPlayer;
