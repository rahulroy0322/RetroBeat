import { useEffect, type FC } from "react";
import PlayerVolumeUI from "../../ui/player/volume";
import { useVolume } from "../../../hooks/use-volume";
import { handelVolumeChange, useAudio } from "../../../store/audio";

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
    <PlayerVolumeUI
      angle={angle}
      handleDown={handleDown}
      handleUp={handleUp}
      handleMouseMove={handleMouseMove}
      handleTouchMove={handleTouchMove}
    />
  );
};

export default PlayerVolume;
