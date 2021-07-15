import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface playerState {
  id: string;
  name: string;
  stack: number;
}

const initialState = {
  id: "1",
  name: "m0neymaker",
  stack: 1000,
} as playerState;

const player = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeByAmount(state, action: PayloadAction<number>) {
      state.stack += action.payload;
    },
  },
});

export const { changeByAmount } = player.actions;
export default player.reducer;
