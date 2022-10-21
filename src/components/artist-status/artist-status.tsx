import { FollowButton, StatusWrapper } from './styles';

function ArtistStatus() {
  return (
    <StatusWrapper>
      <a style={{ marginRight: '30px' }}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="28" fill="#1DB954" />
          <path d="M21 38.5L39.375 28L21 17.5V38.5Z" fill="white" />
        </svg>
      </a>
      <div>
        <FollowButton>FOLLOWING</FollowButton>
      </div>
    </StatusWrapper>
  );
}

export default ArtistStatus;
