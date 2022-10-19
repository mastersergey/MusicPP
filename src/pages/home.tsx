import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import styled from 'styled-components';

function HomePage() {
  const [playerState, setPlayerState] = useState(-1);
  const [player, setPlayer] = useState(null);

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const hundlePause = () => {
    const isPlay = playerState === 1;
    if (isPlay) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const onPlayerReady: YouTubeProps['onStateChange'] = (event) => {
    setPlayerState(event.target.getPlayerState());
  };

  return (
    <div>
      <YouTube
        opts={opts}
        videoId="pXRviuL6vMY"
        onStateChange={onPlayerReady}
        onReady={(e) => setPlayer(e.target)}
      />
      <div>
        <button onClick={() => player.previousVideo()}>Prev</button>
        <button onClick={hundlePause}>{playerState === 1 ? 'Pause' : 'Play'}</button>
        <button onClick={() => player.nextVideo()}>Next</button>
        <button
          onClick={() =>
            player.cuePlaylist({
              list: 'RDEMr9ZkDmyg4Y39GwnbPKJlLA',
            })
          }
        >
          Cue Video
        </button>
      </div>
    </div>
  );
}

export default HomePage;
