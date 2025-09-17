import type { FC } from "react";
import classes from "./disk.module.css";
import type { SongDataType } from "../../../@types/song.types";

type PlayerDiskPropsType = Pick<SongDataType, "thumbnail" | "title"> & {
  isPlaying: boolean;
};

const PlayerDisk: FC<PlayerDiskPropsType> = ({
  thumbnail,
  title,
  isPlaying,
}) => (
  <div className={classes.disk} role="presentation">
    <div
      className={`${classes.roter} ${isPlaying ? classes.playing : ""}`}
      role="presentation"
    />
    <figure className={classes.thubnail}>
      <img src={thumbnail} alt={title} />
    </figure>
  </div>
);

export default PlayerDisk;
