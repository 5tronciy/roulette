import { useDispatch, useSelector } from "react-redux";
import { placeBet } from "../../store/slices/bets";
import { RootState } from "../../store/store";
import s from "./style.module.css";

export const Gameboard = () => {
  const dispatch = useDispatch();
  const betValue = useSelector((state: RootState) => state.bet.value);

  const betHandler = (e: any) => {
    dispatch(placeBet({ value: betValue, sektor: e.target.innerText }));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.table}>
        <div className={s.zero}>0</div>
        <div className={s.half} onClick={betHandler}>
          1to18
        </div>
        <div className={s.sectors}>
          <div className={s.black} onClick={betHandler}>
            1
          </div>
          <div className={s.red} onClick={betHandler}>
            2
          </div>
          <div className={s.black} onClick={betHandler}>
            3
          </div>
          <div className={s.red} onClick={betHandler}>
            4
          </div>
          <div className={s.black} onClick={betHandler}>
            5
          </div>
          <div className={s.red} onClick={betHandler}>
            6
          </div>
          <div className={s.black} onClick={betHandler}>
            7
          </div>
          <div className={s.red} onClick={betHandler}>
            8
          </div>
          <div className={s.black} onClick={betHandler}>
            9
          </div>
          <div className={s.red} onClick={betHandler}>
            10
          </div>
          <div className={s.black} onClick={betHandler}>
            11
          </div>
          <div className={s.red} onClick={betHandler}>
            12
          </div>
          <div className={s.black} onClick={betHandler}>
            13
          </div>
          <div className={s.red} onClick={betHandler}>
            14
          </div>
          <div className={s.black} onClick={betHandler}>
            15
          </div>
          <div className={s.red} onClick={betHandler}>
            16
          </div>
          <div className={s.black} onClick={betHandler}>
            17
          </div>
          <div className={s.red} onClick={betHandler}>
            18
          </div>
          <div className={s.black} onClick={betHandler}>
            19
          </div>
          <div className={s.red} onClick={betHandler}>
            20
          </div>
          <div className={s.black} onClick={betHandler}>
            21
          </div>
          <div className={s.red} onClick={betHandler}>
            22
          </div>
          <div className={s.black} onClick={betHandler}>
            23
          </div>
          <div className={s.red} onClick={betHandler}>
            24
          </div>
          <div className={s.black} onClick={betHandler}>
            25
          </div>
          <div className={s.red} onClick={betHandler}>
            26
          </div>
          <div className={s.black} onClick={betHandler}>
            27
          </div>
          <div className={s.red} onClick={betHandler}>
            28
          </div>
          <div className={s.black} onClick={betHandler}>
            29
          </div>
          <div className={s.red} onClick={betHandler}>
            30
          </div>
          <div className={s.black} onClick={betHandler}>
            31
          </div>
          <div className={s.red} onClick={betHandler}>
            32
          </div>
          <div className={s.black} onClick={betHandler}>
            33
          </div>
          <div className={s.red} onClick={betHandler}>
            34
          </div>
          <div className={s.black} onClick={betHandler}>
            35
          </div>
          <div className={s.red} onClick={betHandler}>
            36
          </div>
        </div>
        <div className={s.half} onClick={betHandler}>
          EVEN
        </div>
        <div className={s.half} onClick={betHandler}>
          RED
        </div>
        <div className={s.half} onClick={betHandler}>
          BLACK
        </div>
        <div className={s.half} onClick={betHandler}>
          ODD
        </div>
        <div className={s.half} onClick={betHandler}>
          19to36
        </div>
        <div className={s.first12} onClick={betHandler}>
          1st12
        </div>
        <div className={s.second12} onClick={betHandler}>
          2st12
        </div>
        <div className={s.third12} onClick={betHandler}>
          3st12
        </div>
        <div className={s.firstColumn} onClick={betHandler}>
          2to1
        </div>
        <div className={s.secondColumn} onClick={betHandler}>
          2to1
        </div>
        <div className={s.thirdColumn} onClick={betHandler}>
          2to1
        </div>
      </div>
    </div>
  );
};
