import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Bet {
  value: number;
  sektor: string;
}

interface BetsState {
  bets: Bet[];
}

const initialState = { bets: [] } as BetsState;

const bets = createSlice({
  name: "bets",
  initialState,
  reducers: {
    placeBet(state, action: PayloadAction<Bet>) {
      state.bets.push(action.payload);
    },
    editBet(state, action: PayloadAction<Bet>) {
      state.bets.filter((bet) => bet.sektor === action.payload.sektor)[0] =
        action.payload;
    },
    clearBets(state) {
      state.bets = [];
    },
  },
});

export const { placeBet, editBet, clearBets } = bets.actions;
export default bets.reducer;
