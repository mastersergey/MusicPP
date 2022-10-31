import { Dispatch, SetStateAction } from 'react';
import YouTube, { YouTubeEvent, YouTubeProps } from 'react-youtube';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setPlayerState } from '../../../redux/player-slice';
import { TPlayer } from '../types';

type VidoWrapperProp = {
  isShow: boolean;
};

const VideoWrapper = styled.div<VidoWrapperProp>`
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

type TVideoProp = {
  setPlayer: Dispatch<SetStateAction<TPlayer>>;
};

function Video({ setPlayer }: TVideoProp) {
  const videoId = useAppSelector((state) => state.player.song);
  const dispatch = useAppDispatch();

  const opts: YouTubeProps['opts'] = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
    },
  };

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    dispatch(setPlayerState(event.target.getPlayerState()));
  };

  return (
    <VideoWrapper isShow={false}>
      <YouTube
        opts={opts}
        videoId={videoId}
        onReady={(e: YouTubeEvent) => setPlayer(e.target)}
        onStateChange={onStateChange}
      />
    </VideoWrapper>
  );
}

export default Video;
