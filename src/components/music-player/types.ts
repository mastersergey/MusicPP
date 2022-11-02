import { Dispatch, SetStateAction } from 'react';
import { YouTubeProps } from 'react-youtube';

export type TPlayerProp = {
  player: TPlayer;
};

export interface IPlayerRightProp extends TPlayerProp {
  toggleClip: Dispatch<SetStateAction<boolean>>;
  isClipOpen: boolean;
}

export type TPlayer = null | {
  opts: YouTubeProps['opts'];
  videiId: string;
  pauseVideo: () => void;
  playVideo: () => void;
  previousVideo: () => void;
  nextVideo: () => void;
  getPlayerState: () => number;
  playVideoAt: (index: number) => void;
  loadPlaylist: (
    playlist: string | string[],
    index?: number,
    startSeconds?: number,
    suggestedQuality?: string,
  ) => void;
  cuePlaylist: (
    playlist: string | string[],
    index?: number,
    startSeconds?: number,
    suggestedQuality?: string,
  ) => void;
};
