import { memo, useMemo, type FC } from "react";
import classes from "./info.module.css";
import Badge from "../badge";
import Range from "../range";
import { formateTime } from "../../utils/lib";
import { useMusicInfo } from "../../store/music-info";
import { handelSeek, useAudio } from "../../store/audio";

type PlayerTimePropsType = {
  time: string;
};

const PlayerTime: FC<PlayerTimePropsType> = memo(({ time }) => (
  <span>{time}</span>
));

const PlayerRange: FC = () => {
  const min = 0;
  const max = useAudio((state) => state.duration);

  const current = useAudio((state) => state.current);

  const currentTime = useMemo(() => formateTime(current), [current]);
  const endTime = useMemo(() => formateTime(max), [max]);

  return (
    <div className={classes.div}>
      <PlayerTime time={currentTime} />
      <Range value={current} onValueChange={handelSeek} min={min} max={max} />
      <PlayerTime time={endTime} />
    </div>
  );
};

const PlayerInfo: FC = () => {
  const title = useMusicInfo((state) => state.title);
  const category = useMusicInfo((state) => state.category);

  return (
    <div className={classes.main}>
      <h2>{title}</h2>

      <Badge>{category}</Badge>

      <PlayerRange />
    </div>
  );
};

export default PlayerInfo;
