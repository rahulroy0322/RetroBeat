import { useCallback, type FC } from "react";
import {
  ModeButtonUI,
  NextButtonUI,
  PlayerActionsUI,
  PlayPauseButtonUI,
  PrevButtonUI,
  ShuffleButtonUI,
} from "../ui/actions";
import { handleModeToggle, useMusic } from "../../store/music";
import { handelPlayChange } from "../../store/audio";
import { setPlayingId, setPlayList, usePlayList } from "../../store/playlist";

const ModeButton: FC = () => {
  const mode = useMusic((state) => state.mode);

  return <ModeButtonUI mode={mode} handelClick={handleModeToggle} />;
};

const PlayPauseButton: FC = () => {
  const isPlaying = useMusic((state) => state.isPlaying);

  const startPlay = useCallback(() => {
    handelPlayChange(true);
  }, []);

  const stopPlay = useCallback(() => {
    handelPlayChange(false);
  }, []);

  return (
    <PlayPauseButtonUI
      isPlaying={isPlaying}
      handelPlay={startPlay}
      handelPause={stopPlay}
    />
  );
};

const PrevButton: FC = () => {
  const handlePrev = useCallback(() => {}, []);

  return <PrevButtonUI hasPrev={true} handelClick={handlePrev} />;
};

const NextButton: FC = () => {
  const handleNext = useCallback(() => {}, []);

  return <NextButtonUI hasNext={true} handelClick={handleNext} />;
};

const ShuffleButton: FC = () => {
  const handleRandom = useCallback(() => {
    const id = usePlayList.getState().id;
    const queue = usePlayList.getState().queue.sort(() => Math.random() - 0.5);
    setPlayList([...queue]);
    setPlayingId(id);
  }, []);

  return <ShuffleButtonUI handelClick={handleRandom} />;
};

const PlayerActions: FC = () => (
  <PlayerActionsUI>
    <ModeButton />
    <PrevButton />
    <PlayPauseButton />
    <NextButton />
    <ShuffleButton />
  </PlayerActionsUI>
);

export default PlayerActions;
