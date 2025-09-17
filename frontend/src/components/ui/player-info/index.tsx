import { memo, type FC, type ReactNode } from "react";
import classes from "./info.module.css";
import Badge from "../badge";
import Range from "../range";
import type { SongDataType } from "../../../@types/song.types";

type PlayerTimeUIPropsType = {
  time: string;
};

const PlayerTimeUI: FC<PlayerTimeUIPropsType> = memo(({ time }) => (
  <span>{time}</span>
));

type PlayerRangeUIPropsType = {
  min: number;
  max: number;
  current: number;
  currentTime: string;
  endTime: string;
  handleSeek: (value: number) => void;
};
const PlayerRangeUI: FC<PlayerRangeUIPropsType> = ({
  min,
  max,
  current,
  currentTime,
  endTime,
  handleSeek,
}) => (
  <div className={classes.div}>
    <PlayerTimeUI time={currentTime} />
    <Range value={current} onValueChange={handleSeek} min={min} max={max} />
    <PlayerTimeUI time={endTime} />
  </div>
);

type PlayerInfoUIPropsType = {
  song: Pick<SongDataType, "title" | "category">;
  children: ReactNode;
};
const PlayerInfoUI: FC<PlayerInfoUIPropsType> = ({
  song: { title, category },
  children,
}) => (
  <div className={classes.main}>
    <h2>{title}</h2>

    <Badge>{category}</Badge>
    {children}
  </div>
);

export { PlayerInfoUI, PlayerRangeUI };
