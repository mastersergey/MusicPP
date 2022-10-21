import { LikedSongsInner, LikedSongsWrapper } from './styles';

function ArtistSongsLiked() {
  return (
    <LikedSongsWrapper>
      <h2>Liked Songs</h2>
      <LikedSongsInner>
        <img src="/assets/albom.jpg" alt="p" />
        <div>
          <h2>Youve liked 4 songs</h2>
          <p>by Twenty One Pilots</p>
        </div>
      </LikedSongsInner>
    </LikedSongsWrapper>
  );
}

export default ArtistSongsLiked;
