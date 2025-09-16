import { useEffect, type FC } from "react";
import classes from "./volume.module.css";
import { useVolume } from "../../hookes/use-volume";
import { handelVolumeChange, useAudio } from "../../store/audio";

const PlayerVolume: FC = () => {
  const {
    angle,
    handleDown,
    handleUp,
    handleMouseMove,
    handleTouchMove,
    setVolume,
  } = useVolume({
    initialVolume: 0,
    onVolumeChange: handelVolumeChange,
  });

  const volume = useAudio((state) => state.volume);

  useEffect(() => {
    setVolume(volume * 100);
  }, [volume, setVolume]);

  return (
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
};

export default PlayerVolume;
