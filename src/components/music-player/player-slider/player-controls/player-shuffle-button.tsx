import IconButton from '../../../styled/icon-button';

function PlayerShuffleButton() {
  return (
    <IconButton
      src="../assets/player/shuffle.svg"
      alt="shuffle"
      onClick={() => console.log('shuffle')}
    />
  );
}

export default PlayerShuffleButton;
