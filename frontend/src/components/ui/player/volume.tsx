import type { FC, MouseEvent, TouchEvent } from "react";
import classes from "./volume.module.css";

type PlayerVolumeUIPropsType = {
  angle: number;
  handleDown: () => void;
  handleUp: () => void;
  handleMouseMove: (e: MouseEvent<HTMLDivElement>) => void;
  handleTouchMove: (e: TouchEvent<HTMLDivElement>) => void;
};
const PlayerVolumeUI: FC<PlayerVolumeUIPropsType> = ({
  angle,
  handleDown,
  handleUp,
  handleMouseMove,
  handleTouchMove,
}) => (
  <div
    onTouchMove={handleTouchMove}
    onMouseMove={handleMouseMove}
    onMouseDown={handleDown}
    onTouchStart={handleDown}
    onMouseUp={handleUp}
    onTouchEnd={handleUp}
    className={classes.volume}
    style={{
      transform: `rotate(${angle}deg)`,
    }}
    role="slider"
  />
);

export default PlayerVolumeUI;
