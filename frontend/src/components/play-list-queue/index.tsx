import type { FC } from "react";
import classes from "./play-list-queue.module.css";
import PlayerWraper from "../player wraper";
import { SongList } from "../songs list";
import { usePlayList } from "../../store/playlist";

const PlayListQueue: FC = () => {
  const queue = usePlayList((state) => state.queue);

  return (
    <PlayerWraper className={classes.wraper}>
      <SongList songs={queue} isQueue />
    </PlayerWraper>
  );
};

export default PlayListQueue;
