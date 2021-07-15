import { useDispatch, useSelector } from "react-redux";
import { changeByAmount, setBetValue } from "../../store/slices/currentBet";
import { RootState } from "../../store/store";
import s from "./style.module.css";

export const ButtonsBar = () => {
  const dispatch = useDispatch();
  const stack = useSelector((state: RootState) => state.player.stack);
  const betValue = useSelector((state: RootState) => state.bet.value);

  const onChangeHandler = (e: any) => {
    dispatch(setBetValue(Number(e.target.value)));
  };

  const decHandler = () => {
    if (betValue > 1) {
      dispatch(changeByAmount(-1));
    }
  };

  const dec10Handler = () => {
    if (betValue > 10) {
      dispatch(changeByAmount(-10));
    }
  };

  const incHandler = () => {
    if (betValue < stack - 1) {
      dispatch(changeByAmount(1));
    } else {
      if (betValue !== stack) {
        dispatch(setBetValue(stack));
      }
    }
  };

  const inc10Handler = () => {
    if (betValue < stack - 10) {
      dispatch(changeByAmount(10));
    } else {
      if (betValue !== stack) {
        dispatch(setBetValue(stack));
      }
    }
  };

  const spin = () => {};

  return (
    <div className={s.wrapper}>
      <div className={s.buttons}>
        <div className="allin" onClick={() => dispatch(setBetValue(stack))}>
          All-In
        </div>
        <div className="dec10" onClick={dec10Handler}>
          -10
        </div>
        <div className="dec" onClick={decHandler}>
          -1
        </div>
        <input
          type="text"
          className="betValue"
          value={betValue}
          onChange={onChangeHandler}
        />
        <div className="inc10" onClick={inc10Handler}>
          +10
        </div>
        <div className="inc" onClick={incHandler}>
          +1
        </div>
        <div className="spin" onClick={spin}>
          SPIN
        </div>
      </div>
      <div className="stack">{stack}</div>
    </div>
  );
};
