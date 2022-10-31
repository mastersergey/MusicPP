import { useAppSelector } from '../../redux/hooks';
import { Flexbox } from '../styled/flexbox';
import IconButton from '../styled/icon-button';
import StyledText from '../styled/styled-text';

function PlayerLeftSide() {
  const { songTitle, artistTitle, songIcon } = useAppSelector(
    (state) => state.player.songInfo,
  );

  return (
    <Flexbox flex="1">
      <img alt="icon" src={songIcon} style={{ width: '100px', marginRight: '10px' }} />
      <Flexbox direction="column">
        <StyledText color="white" size="17px" weight="500">
          {songTitle}
        </StyledText>
        <StyledText color="darken(white, 30%)" size="14px" weight="400">
          {artistTitle}
        </StyledText>
      </Flexbox>
      <IconButton src="./assets/like-logo.svg" alt="like" />
    </Flexbox>
  );
}

export default PlayerLeftSide;
