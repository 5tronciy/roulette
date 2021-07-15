import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GameState {
  status: "play" | "over";
  winSector?: string;
}

const initialState = { status: "play" } as GameState;

const game = createSlice({
  name: "game",
  initialState,
  reducers: {
    setWinSector(state, action: PayloadAction<string>) {
      state.winSector = action.payload;
    },
  },
});

export const { setWinSector } = game.actions;
export default game.reducer;
