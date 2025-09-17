import type { ReactNode, FC } from "react";
import classes from "./actions.module.css";
import type { ModeType } from "../../../@types/mode.types";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  Repeat1Icon,
  RepeatIcon,
  ShuffleIcon,
} from "../../../icons";

type ActionButtonUIPropsType = {
  children: ReactNode;
  type?: "play" | "pause" | "disabled" | "none";
  onClick: () => void;
  disabled?: boolean;
};
const ActionButtonUI: FC<ActionButtonUIPropsType> = ({
  children,
  type = "none",
  onClick,
  disabled = false,
}) => (
  <button
    onClick={onClick}
    className={`${classes.button} ${
      type === "play"
        ? classes.pause
        : type === "pause"
        ? classes.play
        : type === "disabled"
        ? classes.disabled
        : ""
    }`}
    disabled={disabled}
  >
    {children}
  </button>
);

type ModeButtonUIPropsType = {
  mode: ModeType;
  handelClick: () => void;
};
const ModeButtonUI: FC<ModeButtonUIPropsType> = ({ mode, handelClick }) => (
  <ActionButtonUI
    type={mode === "none" ? "disabled" : "none"}
    onClick={handelClick}
  >
    {mode === "one" ? <Repeat1Icon /> : <RepeatIcon />}
  </ActionButtonUI>
);

type PlayPauseButtonUIPropsType = {
  isPlaying: boolean;
  handelPlay: () => void;
  handelPause: () => void;
};
const PlayPauseButtonUI: FC<PlayPauseButtonUIPropsType> = ({
  isPlaying,
  handelPlay,
  handelPause,
}) => (
  <>
    {isPlaying ? (
      <ActionButtonUI onClick={handelPause} type="pause">
        <PauseIcon />
      </ActionButtonUI>
    ) : (
      <ActionButtonUI onClick={handelPlay} type="play">
        <PlayIcon />
      </ActionButtonUI>
    )}
  </>
);

type PrevButtonUIPropsType = {
  hasPrev: boolean;
  handelClick: () => void;
};
const PrevButtonUI: FC<PrevButtonUIPropsType> = ({ hasPrev, handelClick }) => (
  <ActionButtonUI type={hasPrev ? "none" : "disabled"} onClick={handelClick}>
    <PrevIcon />
  </ActionButtonUI>
);

type NextButtonUIPropsType = {
  hasNext: boolean;
  handelClick: () => void;
};
const NextButtonUI: FC<NextButtonUIPropsType> = ({ hasNext, handelClick }) => (
  <ActionButtonUI type={hasNext ? "none" : "disabled"} onClick={handelClick}>
    <NextIcon />
  </ActionButtonUI>
);

type ShuffleButtonUIPropsType = {
  handelClick: () => void;
};
const ShuffleButtonUI: FC<ShuffleButtonUIPropsType> = ({ handelClick }) => (
  <ActionButtonUI onClick={handelClick}>
    <ShuffleIcon />
  </ActionButtonUI>
);

type PlayerActionsUIPropsType = {
  children: ReactNode;
};
const PlayerActionsUI: FC<PlayerActionsUIPropsType> = ({ children }) => (
  <div className={classes.actions}>{children}</div>
);

export {
  PlayPauseButtonUI,
  PrevButtonUI,
  NextButtonUI,
  ModeButtonUI,
  ShuffleButtonUI,
  PlayerActionsUI,
};
