import type { FC } from "react";
import classes from "./mute.module.css";
import MuteIcon from "../../../icons/mute";
import VolumeIcon from "../../../icons/volume";

type PlayerMuteUIPropsType = {
  muted: boolean;
  handleClick: () => void;
};
const PlayerMuteUI: FC<PlayerMuteUIPropsType> = ({ muted, handleClick }) => (
  <button onClick={handleClick} className={classes.button}>
    {muted ? <MuteIcon /> : <VolumeIcon />}
  </button>
);

export default PlayerMuteUI;
