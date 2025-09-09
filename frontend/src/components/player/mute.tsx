import classes from "./mute.module.css";
import MuteIcon from "../../icons/mute";
import { handelToggleMute, useAudio } from "../../store/audio";
import VolumeIcon from "../../icons/volume";
import type { FC } from "react";

const PlayerMute: FC = () => {
  const muted = useAudio((state) => state.muted);

  const Icon = muted ? MuteIcon : VolumeIcon;

  return (
    <button onClick={handelToggleMute} className={classes.button}>
      <Icon />
    </button>
  );
};

export default PlayerMute;
