import type { FC, ReactNode } from "react";
import classes from "./player.module.css";
import PlayerDiskUI from "./disk";
import PlayerNobUI from "./nob";
import type { SongDataType } from "../../../@types/song.types";

type DiskandNobUIPropsType = {
  isPlaying: boolean;
  song: Pick<SongDataType, "thumbnail" | "title">;
};

const DiskandNobUI: FC<DiskandNobUIPropsType> = ({
  isPlaying,
  song: { title, thumbnail },
}) => (
  <>
    <div className={classes.disk} role="presentation">
      <PlayerDiskUI title={title} thumbnail={thumbnail} isPlaying={isPlaying} />
    </div>
    <PlayerNobUI isPlaying={isPlaying} />
  </>
);

type RetroPlayerUIPropsType = {
  children: ReactNode;
};
const RetroPlayerUI: FC<RetroPlayerUIPropsType> = ({ children }) => (
  <div className={classes.player} role="presentation">
    {children}
  </div>
);

export { RetroPlayerUI,DiskandNobUI };
