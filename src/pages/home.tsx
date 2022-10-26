import React, { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import styled from 'styled-components';

type TPlayer = null | {
  opts: YouTubeProps['opts'];
  videiId: string;
  pauseVideo: () => void;
  playVideo: () => void;
  previousVideo: () => void;
  nextVideo: () => void;
  cuePlaylist: (
    playlist: string | string[],
    index?: number,
    startSeconds?: number,
    suggestedQuality?: string,
  ) => void;
};

function HomePage() {
  const [playerState, setPlayerState] = useState(-1);
  const [player, setPlayer] = useState<TPlayer>(null);

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const hundlePause = () => {
    const isPlay = playerState === 1;
    if (player !== null) {
      isPlay ? player.pauseVideo() : player.playVideo();
    }
  };

  const onPlayerReady: YouTubeProps['onStateChange'] = (event) => {
    setPlayerState(event.target.getPlayerState());
  };
  const videoId = 'pXRviuL6vMY';

  return (
    <div>
      <YouTube
        opts={opts}
        videoId={videoId}
        onStateChange={onPlayerReady}
        onReady={(e) => setPlayer(e.target)}
      />
      <div>
        <button onClick={() => player.previousVideo()}>Prev</button>
        <button onClick={hundlePause}>{playerState === 1 ? 'Pause' : 'Play'}</button>
        <button onClick={() => player.nextVideo()}>Next</button>
        <button onClick={() => player.cuePlaylist([videoId, 'UprcpdwuwCg'])}>
          Cue Video
        </button>
      </div>
    </div>
  );
}

export default HomePage;
