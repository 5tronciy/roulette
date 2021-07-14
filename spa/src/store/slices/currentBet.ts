import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CurrentBetState {
  value: number;
}

const initialState = { value: 1 } as CurrentBetState;

const currentBet = createSlice({
  name: "currentBet",
  initialState,
  reducers: {
    changeByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { changeByAmount } = currentBet.actions;
export default currentBet.reducer;
