import { memo } from 'react';

import { useAppSelector } from '../../redux/hooks';
import { Flexbox } from '../styled/flexbox';
import IconButton from '../styled/icon-button';
import SlideText from '../styled/slide-text';
import StyledText from '../styled/styled-text';

const PlayerLeftSide = memo(function PlayerLeftSide() {
  const { songTitle, artistTitle, songIcon } = useAppSelector(
    (state) => state.player.songInfo,
  );

  return (
    <Flexbox flex="1">
      <img alt="icon" src={songIcon} style={{ width: '100px', marginRight: '10px' }} />
      <Flexbox direction="column" style={{ width: '250px' }}>
        <SlideText>{songTitle}</SlideText>
        <StyledText color="darken(white, 30%)" size="14px" weight="400">
          {artistTitle}
        </StyledText>
      </Flexbox>
      <IconButton
        src="./assets/player/like-icon.svg"
        alt="like"
        onClick={() => console.log('like')}
      />
    </Flexbox>
  );
});

export default PlayerLeftSide;
