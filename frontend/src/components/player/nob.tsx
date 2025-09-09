import type { FC } from "react";
import classes from "./nob.module.css";

type PlayerNobPropsType = {
  isPlaying: boolean;
};

const PlayerNob: FC<PlayerNobPropsType> = ({ isPlaying }) => (
  <div
    className={`${classes.nob} ${isPlaying ? classes.playing : ""}`}
    role="presentation"
  >
    <div className={classes.pin} role="presentation">
      <div className={classes.decore} role="presentation" />
      <div className={classes.handle} role="presentation">
        <div className={classes.drum} role="presentation" />
        <div className={classes.tip} role="presentation">
          <div className={classes["top-nob"]} role="presentation" />
        </div>
      </div>
    </div>
  </div>
);

export default PlayerNob;
