import s from "./style.module.css";

export const Gameboard = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.table}>
        <div className={s.zero}>0</div>
        <div className={s.half}>1to18</div>
        <div className={s.sectors}>
          <div className={s.black}>1</div>
          <div className={s.red}>2</div>
          <div className={s.black}>3</div>
          <div className={s.red}>4</div>
          <div className={s.black}>5</div>
          <div className={s.red}>6</div>
          <div className={s.black}>7</div>
          <div className={s.red}>8</div>
          <div className={s.black}>9</div>
          <div className={s.red}>10</div>
          <div className={s.black}>11</div>
          <div className={s.red}>12</div>
          <div className={s.black}>13</div>
          <div className={s.red}>14</div>
          <div className={s.black}>15</div>
          <div className={s.red}>16</div>
          <div className={s.black}>17</div>
          <div className={s.red}>18</div>
          <div className={s.black}>19</div>
          <div className={s.red}>20</div>
          <div className={s.black}>21</div>
          <div className={s.red}>22</div>
          <div className={s.black}>23</div>
          <div className={s.red}>24</div>
          <div className={s.black}>25</div>
          <div className={s.red}>26</div>
          <div className={s.black}>27</div>
          <div className={s.red}>28</div>
          <div className={s.black}>29</div>
          <div className={s.red}>30</div>
          <div className={s.black}>31</div>
          <div className={s.red}>32</div>
          <div className={s.black}>33</div>
          <div className={s.red}>34</div>
          <div className={s.black}>35</div>
          <div className={s.red}>36</div>
        </div>
        <div className={s.half}>EVEN</div>
        <div className={s.half}>RED</div>
        <div className={s.half}>BLACK</div>
        <div className={s.half}>ODD</div>
        <div className={s.half}>19to36</div>
        <div className={s.first12}>1st12</div>
        <div className={s.second12}>2st12</div>
        <div className={s.third12}>3st12</div>
        <div className={s.firstColumn}>2to1</div>
        <div className={s.secondColumn}>2to1</div>
        <div className={s.thirdColumn}>2to1</div>
      </div>
    </div>
  );
};
