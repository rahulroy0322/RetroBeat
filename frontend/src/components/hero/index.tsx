import { type FC } from "react";
import classes from "./hero.module.css";
import { HeartIcon } from "../../icons";
import type { SongDataType } from "../../@types/song.types";
import { addToPlayList, setPlayingId } from "../../store/playlist";

type HeroSectionPropsType = {
  song: SongDataType;
};

const HeroSection: FC<HeroSectionPropsType> = ({ song }) => {
  const {
    title,
    thumbnail,
    author: { artist },
    _id,
  } = song;
  const handelClick = () => {
    addToPlayList(song);
    setPlayingId(_id);
  };
  return (
    <section className={classes.hero}>
      <div className={classes.info} role="presentation">
        <h2>Trending Currently</h2>

        <div className={classes.music} role="presentation">
          <h3>{title}</h3>
          <h4>{artist}</h4>
        </div>

        <div className={classes.actions} role="presentation">
          <button onClick={handelClick} className={classes.listen}>
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
};

export default HeroSection;
