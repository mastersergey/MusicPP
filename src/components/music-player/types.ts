import { Dispatch, SetStateAction } from 'react';
import { YouTubeProps } from 'react-youtube';

export type TPlayer = null | {
  opts: YouTubeProps['opts'];
  videoId: string;
  getPlayerState: () => number;
  pauseVideo: () => void;
  playVideo: () => void;
  previousVideo: () => void;
  nextVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
};

export type TPlayerProp = {
  player: TPlayer;
};

export interface IPlayerRightProp extends TPlayerProp {
  toggleClip: Dispatch<SetStateAction<boolean>>;
  isClipOpen: boolean;
}
