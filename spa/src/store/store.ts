import { configureStore } from "@reduxjs/toolkit";
import currentBetReducer from "./slices/currentBet";
import betsReducer from "./slices/bets";
import gameReducer from "./slices/game";
import playerReducer from "./slices/player";

export const store = configureStore({
  reducer: {
    bet: currentBetReducer,
    bets: betsReducer,
    game: gameReducer,
    player: playerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
