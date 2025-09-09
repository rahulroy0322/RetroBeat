import { useCallback, useEffect, type FC, type SyntheticEvent } from "react";
import { useMusicInfo } from "../../store/music-info";
import { useMusic } from "../../store/music";
import { useAudio } from "../../store/audio";
import classes from "./audio.module.css";

type PlayerAudioImplPropsType = {
  src: string;
};

const PlayerAudioImpl: FC<PlayerAudioImplPropsType> = ({ src }) => {
  const audioRef = useAudio((state) => state.audioRef);
  const setIsPlaying = useMusic((state) => state.setIsPlaying);

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
  }, [setIsPlaying]);

  const handelPause = useCallback(() => {
    setIsPlaying(false);
  }, [setIsPlaying]);

  useEffect(() => {
    audioRef.current.volume = 0;
  }, [audioRef]);

  return (
    <audio
      controls
      onVolumeChange={handelVolume}
      onTimeUpdate={handelTimeUpdate}
      onLoadedMetadata={handelLoadedMetadata}
      src={src}
      ref={audioRef}
      onPlay={handelPlay}
      onPause={handelPause}
      autoPlay
      muted
      className={
        classes.audio
      }
    />
  );
};

const PlayerAudio: FC = () => {
  const url = useMusicInfo((state) => state.url);

  if (!url) {
    return null;
  }

  return <PlayerAudioImpl src={url} />;
};

export default PlayerAudio;
