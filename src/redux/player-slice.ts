import { createSlice } from '@reduxjs/toolkit';

import { TPlaylistItem } from '../components/search/types';

interface IPlayerState {
  song: string;
  playerState: number;
  showPlayer: boolean;
  playlist: TPlaylistItem[];
  songIndex: number;
  songInfo: {
    songTitle: string;
    artistTitle: string;
    songIcon: string;
  };
}

const initialState = {
  song: '',
  playerState: -1,
  showPlayer: false,
  playlist: [],
  songIndex: 0,
  songInfo: {
    songTitle: '',
    artistTitle: '',
    songIcon: '',
  },
} as IPlayerState;

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    playSong: (state, action) => {
      state.song = action.payload;
      state.showPlayer = true;
    },
    setSongInfo: (state, action) => {
      state.songInfo = action.payload;
    },
    setPlayerState: (state, action) => {
      state.playerState = action.payload;
    },
    setPlaylist: (state, action) => {
      state.playlist = action.payload;
    },
    setSongIndex: (state, action) => {
      state.songIndex = action.payload;
    },
  },
});

export const { playSong, setSongInfo, setPlayerState, setPlaylist, setSongIndex } =
  playerSlice.actions;

export const playerReducer = playerSlice.reducer;
