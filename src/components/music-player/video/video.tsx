import { Dispatch, SetStateAction } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setPlayerState } from '../../../redux/player-slice';
import { Flexbox } from '../../styled/flexbox';
import { TPlayer } from '../types';

type VidoWrapperProp = {
  isOpen: boolean;
};

const VideoWrapper = styled(Flexbox)<VidoWrapperProp>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
`;

type TVideoProp = {
  setPlayer: Dispatch<SetStateAction<TPlayer | null>>;
  isClipOpen: boolean;
};

function Video({ setPlayer, isClipOpen }: TVideoProp) {
  const videoId = useAppSelector((state) => state.player.song);
  const dispatch = useAppDispatch();

  const opts: YouTubeProps['opts'] = {
    height: '360',
    width: '580',
    playerVars: {
      autoplay: 1,
    },
  };

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    dispatch(setPlayerState(event.target.getPlayerState()));
  };

  const onReady: YouTubeProps['onReady'] = (event) => {
    const player = event.target;
    setPlayer(player);
  };

  return (
    <VideoWrapper isOpen={isClipOpen} justify="flex-end">
      <YouTube
        opts={opts}
        videoId={videoId}
        onReady={onReady}
        onStateChange={onStateChange}
      />
    </VideoWrapper>
  );
}

export default Video;
