// songSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  soundPlayed: null,
  isPaused: false,
  progress: 0,
  volumeLevel: 1,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
    setSoundPlayed: (state, action) => {
      state.soundPlayed = action.payload;
    },
    setIsPaused: (state, action) => {
      state.isPaused = action.payload;
    },
    setProgress(state, action) {
      state.progress = action.payload;
    },
    setVolumeLevel(state, action) {
      state.volumeLevel = action.payload;
      if (state.soundPlayed) {
        state.soundPlayed.volume(action.payload);
      }
    },
  },
});

export const {
  setCurrentSong,
  setSoundPlayed,
  setIsPaused,
  setProgress,
  setVolumeLevel,
} = songSlice.actions;
export default songSlice.reducer;
