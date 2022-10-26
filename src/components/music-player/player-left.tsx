import { Flexbox } from '../styled/flexbox';
import IconButton from '../styled/icon-button';
import StyledText from '../styled/styled-text';

function PlayerLeftSide() {
  return (
    <Flexbox flex="1">
      <img
        alt="icon"
        src="././assets/albom.jpg"
        style={{ width: '50px', marginRight: '10px' }}
      />
      <Flexbox direction="column">
        <StyledText color="white" size="17px" weight="500">
          Stressed Out
        </StyledText>
        <StyledText color="darken(white, 30%)" size="14px" weight="400">
          Twenty one pilots
        </StyledText>
      </Flexbox>
      <IconButton src="./assets/like-logo.svg" alt="like" />
    </Flexbox>
  );
}

export default PlayerLeftSide;
