import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
  soundPlayed: null,
  isPaused: false,
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
  },
});

export const { setCurrentSong, setSoundPlayed, setIsPaused } =
  songSlice.actions;
export default songSlice.reducer;
