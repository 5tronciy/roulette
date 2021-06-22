import s from "./style.module.css";
import videoCover from "../../assets/Casino.mp4";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className={s.intro}>
      <div className={s.media}>
        <video src={videoCover} className={s.video} autoPlay muted loop></video>
      </div>
      <div className={s.content}>
        <h1>betbetbet</h1>
        <h2>roulette</h2>
        <Link to="/roulette" target="_blank" rel="noopener noreferrer">
          Play
        </Link>
      </div>
      <div className={s.copyright}>
        Video by
        <a href="https://pixabay.com/ru/users/tommyvideo-3092371/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=55674">
          Tomislav Jakupec
        </a>
        from
        <a href="https://pixabay.com/ru/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=55674">
          Pixabay
        </a>
      </div>
    </div>
  );
};
