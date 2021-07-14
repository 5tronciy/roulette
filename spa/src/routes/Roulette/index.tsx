import s from "./style.module.css";
import { store } from "../../store/store";
import { Provider } from "react-redux";

export const Roulette = () => {
  return (
    <Provider store={store}>
      <div>
        <canvas id="game" className={s.canvas}></canvas>
      </div>
    </Provider>
  );
};
