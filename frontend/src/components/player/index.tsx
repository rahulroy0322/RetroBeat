import classes from "./player.module.css";
import PlayerDisk from "./disk";
import PlayerNob from "./nob";
import PlayerVolume from "./volume";
import { useMusic } from "../../store/music";
import type { FC } from "react";
import PlayerMute from "./mute";
import { useMusicInfo } from "../../store/music-info";

const DiskandNob: FC = () => {
  const isPlaying = useMusic((state) => state.isPlaying);
  const title = useMusicInfo((state) => state.title);
  const thumbnail = useMusicInfo((state) => state.thumbnail);

  console.log("rendaring", "disk nob");

  return (
    <>
      <div className={classes.disk} role="presentation">
        <PlayerDisk title={title} thumbnail={thumbnail} isPlaying={isPlaying} />
      </div>
      <PlayerNob isPlaying={isPlaying} />
    </>
  );
};

const RetroPlayer: FC = () => (
  <div className={classes.player} role="presentation">
    <PlayerMute />

    <DiskandNob />

    <PlayerVolume />
  </div>
);

export default RetroPlayer;
