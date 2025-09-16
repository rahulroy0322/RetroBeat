import { useCallback, useEffect, type FC, type SyntheticEvent } from "react";
import { useMusic, setIsPlaying } from "../../store/music";
import { useAudio } from "../../store/audio";
import classes from "./audio.module.css";
import { setPlayingId, usePlayList } from "../../store/playlist";

type PlayerAudioImplPropsType = {
  src: string;
};

const PlayerAudioImpl: FC<PlayerAudioImplPropsType> = ({ src }) => {
  const audioRef = useAudio((state) => state.audioRef);
  const mode = useMusic((state) => state.mode);

  const setCurrent = useAudio((state) => state.setCurrent);
  const setDuration = useAudio((state) => state.setDuration);
  const setVolume = useAudio((state) => state.setVolume);

  const handelVolume = useCallback(
    (e: SyntheticEvent<HTMLAudioElement, Event>) => {
      const { volume } = e.target as HTMLAudioElement;

      setVolume(volume);
    },
    [setVolume]
  );

  const handelLoadedMetadata = useCallback(
    (e: SyntheticEvent<HTMLAudioElement, Event>) => {
      const { duration } = e.target as HTMLAudioElement;
      setDuration(duration);
    },
    [setDuration]
  );

  const handelTimeUpdate = useCallback(
    (e: SyntheticEvent<HTMLAudioElement, Event>) => {
      const { currentTime } = e.target as HTMLAudioElement;
      setCurrent(currentTime);
    },
    [setCurrent]
  );

  const handelPlay = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const handelPause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const handelEnd = useCallback(() => {
    if (mode !== "one") {
      const { id, queue } = usePlayList.getState();

      const index = queue.findIndex((song) => song._id === id);

      if (index < queue.length - 1) {
        setPlayingId(queue[index + 1]._id);
      } else if (mode === "all") {
        setPlayingId(queue[0]._id);
      }
    }
  }, [mode]);

  const handelSeeked = useCallback(
    (e: SyntheticEvent<HTMLAudioElement, Event>) => {
      const { paused } = e.target as HTMLAudioElement;
      if (paused) {
        handelPlay();
      }
    },
    [handelPlay]
  );
  useEffect(() => {
    audioRef.current.volume = 0;
  }, [audioRef]);

  return (
    <audio
      controls
      onVolumeChange={handelVolume}
      onTimeUpdate={handelTimeUpdate}
      onLoadedMetadata={handelLoadedMetadata}
      onEnded={handelEnd}
      src={src}
      ref={audioRef}
      onPlay={handelPlay}
      onPause={handelPause}
      onSeeked={handelSeeked}
      autoPlay
      muted
      loop={mode === "one"}
      className={classes.audio}
    />
  );
};

const PlayerAudio: FC = () => {
  const url = usePlayList(
    (state) => state.queue.find((song) => song._id === state.id)?.url
  );

  if (!url) {
    return null;
  }

  return <PlayerAudioImpl src={url} />;
};

export default PlayerAudio;
