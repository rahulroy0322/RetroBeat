import {
  useCallback,
  useMemo,
  useState,
  type MouseEvent,
  type TouchEvent,
} from "react";
import { computeVol } from "../utils/volume";

type UseVolumePropsType = {
  initialVolume?: number;
  onVolumeChange?: (volume: number) => void;
};

const useVolume = ({
  initialVolume = 0,
  onVolumeChange,
}: UseVolumePropsType) => {
  const [isActive, setIsActive] = useState(false);
  const [volume, setVolume] = useState(initialVolume);
  const angle = useMemo(() => volume * (270 / 100), [volume]);

  const handleVolumeChange = useCallback(
    (options: {
      element: DOMRect;
      page: {
        x: number;
        y: number;
      };
    }) => {
      const vol = computeVol(options)[0];
      setVolume(vol);

      onVolumeChange?.(vol);
    },
    [onVolumeChange]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (!isActive) {
        return;
      }

      handleVolumeChange({
        element: (e.target as HTMLDivElement).getBoundingClientRect(),
        page: {
          x: e.pageX,
          y: e.pageY,
        },
      });
    },
    [handleVolumeChange, isActive]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      if (!isActive) {
        return;
      }

      handleVolumeChange({
        element: (e.target as HTMLDivElement).getBoundingClientRect(),
        page: {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY,
        },
      });
    },
    [handleVolumeChange, isActive]
  );

  const handleDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleUp = useCallback(() => {
    setIsActive(false);
  }, []);

  return useMemo(
    () => ({
      angle,
      volume,
      handleDown,
      handleUp,
      handleMouseMove,
      handleTouchMove,
      setVolume,
    }),
    [angle, handleDown, handleMouseMove, handleTouchMove, handleUp, volume]
  );
};

export { useVolume };
