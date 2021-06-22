import s from "./style.module.css";

export const Roulette = () => {
  return (
    <div>
      <canvas id="game" className={s.canvas}></canvas>
    </div>
  );
};
