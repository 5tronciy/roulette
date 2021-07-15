import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import s from "./style.module.css";

export const RouletteAnimation = () => {
  const winSector = useSelector((state: RootState) => state.game.winSector);

  return (
    <div className={s.wrapper}>
      <span>{winSector}</span>
    </div>
  );
};
