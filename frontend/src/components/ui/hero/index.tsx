import type { FC } from "react";
import classes from "./hero.module.css";
import type { SongDataType } from "../../../@types/song.types";
import { HeartIcon } from "../../../icons";

type HeroSectionUIPropsType = {
  song: SongDataType;
  handleClick: () => void;
};

const HeroSectionUI: FC<HeroSectionUIPropsType> = ({
  song: {
    title,
    thumbnail,
    author: { artist },
  },
  handleClick,
}) => (
  <section className={classes.hero}>
    <div className={classes.info} role="presentation">
      <h2>Trending Currently</h2>

      <div className={classes.music} role="presentation">
        <h3>{title}</h3>
        <h4>{artist}</h4>
      </div>

      <div className={classes.actions} role="presentation">
        <button onClick={handleClick} className={classes.listen}>
          Listen Now
        </button>

        <button className={classes.fav}>
          <HeartIcon />
        </button>
      </div>
    </div>

    <figure className={classes.imgDiv} role="presentation">
      <img src={thumbnail} alt={title} />
    </figure>
  </section>
);

export default HeroSectionUI;
