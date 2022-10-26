import StyledButton from './styled-button';

type TIconButtonProp = {
  src: string;
  alt: string;
  onClick?: () => void;
};

function IconButton({ src, alt, onClick }: TIconButtonProp) {
  return (
    <StyledButton color="transparent" onClick={onClick}>
      <img src={src} alt={alt} />
    </StyledButton>
  );
}

export default IconButton;
