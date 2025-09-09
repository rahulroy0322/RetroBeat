import { type FC } from "react";
import classes from "./hero.module.css";
import { HeartIcon } from "../../icons";
import type { SongDataType } from "../../@types/song.types";
import { useMusicInfo } from "../../store/music-info";

type HeroSectionPropsType = {
  song: SongDataType;
};

const HeroSection: FC<HeroSectionPropsType> = ({
  song: {
    title,
    thumbnail,
    author: { artist },
    category,
    url,
  },
}) => {
  const setInfo = useMusicInfo((state) => state.setInfo);
  const handelClick = () => {
    setInfo({
      category,
      title,
      url,
      thumbnail
    });
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
