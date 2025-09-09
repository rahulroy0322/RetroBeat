import { useEffect, type FC } from "react";
import { handleModeToggle } from "../../store/music";
import {
  handelPlayChange,
  handelSeek,
  handelToggleMute,
  handelVolumeChange,
  useAudio,
} from "../../store/audio";

const PlayerEventsImpl: FC = () => {
  const ref = useAudio((state) => state.audioRef);

  useEffect(() => {
    const keyUp = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === "INPUT") {
        return;
      }

      const audioRef = ref.current;

      if (!audioRef) {
        return;
      }
      const isShift = e.shiftKey;

      switch (e.key.toLowerCase()) {
        case " ":
        case ";": {
          handelPlayChange(audioRef.paused);
          return;
        }

        case "arrowright":
        case "l": {
          let add = 5;

          if (isShift) {
            add = 10;
          }
          handelSeek(audioRef.currentTime + add);
          return;
        }

        case "arrowleft":
        case "h": {
          let substruct = 5;

          if (isShift) {
            substruct = 10;
          }

          handelSeek(audioRef.currentTime - substruct);
          return;
        }

        case "arrowup": {
          handelVolumeChange(Math.min(audioRef.volume * 100 + 10, 100));
          return;
        }

        case "arrowdown": {
          handelVolumeChange(Math.max(audioRef.volume * 100 - 10, 0));
          return;
        }

        case "m": {
          handelToggleMute();
          return;
        }

        case "r": {
          handleModeToggle();
          return;
        }

        default: {
          console.log(`"${e.key}" is not support`);
        }
      }
    };

    window.addEventListener("keyup", keyUp);
    return () => {
      window.removeEventListener("keyup", keyUp);
    };
  }, [ref]);

  return <div></div>;
};

const PlayerEvents: FC = () => {
  const audioRef = useAudio((state) => state.audioRef);

  if (!audioRef) {
    return null;
  }

  return <PlayerEventsImpl />;
};

export default PlayerEvents;
