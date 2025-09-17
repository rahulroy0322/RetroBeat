import type { FC, ReactNode } from "react";
import classes from "./play-list-queue.module.css";
import PlayerWraperUI from "../player-wraper";

type PlayListQueueUIPropsType = {
  children: ReactNode;
};
const PlayListQueueUI: FC<PlayListQueueUIPropsType> = ({ children }) => (
  <PlayerWraperUI className={classes.wraper}>{children}</PlayerWraperUI>
);

export default PlayListQueueUI;
