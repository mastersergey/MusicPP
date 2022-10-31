import { createSlice } from '@reduxjs/toolkit';

interface IPlayerState {
  song: string;
  playerState: number;
  showPlayer: boolean;
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
  },
});

export const { playSong, setSongInfo, setPlayerState } = playerSlice.actions;

export const playerReducer = playerSlice.reducer;
