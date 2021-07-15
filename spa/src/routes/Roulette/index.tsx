import s from "./style.module.css";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import { Gameboard } from "../../components/Gameboard";
import { RouletteAnimation } from "../../components/Roulette";
import { ButtonsBar } from "../../components/ButtonsBar";

export const Roulette = () => {
  return (
    <Provider store={store}>
      <div className={s.wrapper}>
        <Gameboard />
        <RouletteAnimation />
        <ButtonsBar />
      </div>
    </Provider>
  );
};
