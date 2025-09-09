import { useCallback, type FC, type ReactNode } from "react";
import classes from "./actions.module.css";
import {
  NextIcon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  Repeat1Icon,
  RepeatIcon,
  ShuffleIcon,
} from "../../icons";
import { handleModeToggle, useMusic } from "../../store/music";
import { handelPlayChange } from "../../store/audio";

type ActionButtonPropsType = {
  children: ReactNode;
  type?: "play" | "pause" | "disabled" | "none";
  onClick: () => void;
};

const ActionButton: FC<ActionButtonPropsType> = ({
  children,
  type = "none",
  onClick,
}) => {
  return (
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
    >
      {children}
    </button>
  );
};

const ModeButton: FC = () => {
  const mode = useMusic((state) => state.mode);

  console.log("rendaring", "mode", mode);

  return (
    <ActionButton
      type={mode === "none" ? "disabled" : "none"}
      onClick={handleModeToggle}
    >
      {mode === "one" ? <Repeat1Icon /> : <RepeatIcon />}
    </ActionButton>
  );
};

const PlayPauseButton: FC = () => {
  const isPlaying = useMusic((state) => state.isPlaying);

  const startPlay = useCallback(() => {
    handelPlayChange(true);
  }, []);

  const stopPlay = useCallback(() => {
    handelPlayChange(false);
  }, []);

  console.log("rendering", "play pause");

  return (
    <>
      {isPlaying ? (
        <ActionButton onClick={stopPlay} type="pause">
          <PauseIcon />
        </ActionButton>
      ) : (
        <ActionButton onClick={startPlay} type="play">
          <PlayIcon />
        </ActionButton>
      )}
    </>
  );
};

const PrevButton: FC = () => {
  const handlePrev = useCallback(() => {}, []);

  console.log("rendering", "prev");

  return (
    <ActionButton onClick={handlePrev}>
      <PrevIcon />
    </ActionButton>
  );
};

const NextButton: FC = () => {
  const handleNext = useCallback(() => {}, []);

  console.log("rendering", "next");

  return (
    <ActionButton onClick={handleNext}>
      <NextIcon />
    </ActionButton>
  );
};

const ShuffleButton: FC = () => {
  const handleRandom = useCallback(() => {}, []);

  console.log("rendering", "random");

  return (
    <ActionButton onClick={handleRandom}>
      <ShuffleIcon />
    </ActionButton>
  );
};

const PlayerActions: FC = () => {
  console.log("rendering", "action");

  return (
    <div className={classes.actions}>
      <ModeButton />
      <PrevButton />
      <PlayPauseButton />
      <NextButton />
      <ShuffleButton />
    </div>
  );
};

export default PlayerActions;
