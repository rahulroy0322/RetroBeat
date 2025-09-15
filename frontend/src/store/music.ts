import { create } from "zustand";
import { persist } from "zustand/middleware";

type ModeType = "one" | "all" | "none";

type UseMusicType = {
  mode: ModeType;
  isPlaying: boolean;
};

const useMusic = create(
  persist<UseMusicType>(
    () => ({
      mode: "none",
      isPlaying: false,
    }),
    {
      name: "music-preferences",
      partialize: (state) => ({
        mode: state.mode,
        isPlaying: false,
      }),
    }
  )
);

const { getState: get, setState: set } = useMusic;

const setIsPlaying = (isPlaying: boolean) =>
  set({
    isPlaying,
  });

const handleModeToggle = () => {
  const _mode = get().mode;
  const mode = _mode === "none" ? "all" : _mode === "all" ? "one" : "none";

  set({
    mode,
  });
};

export { useMusic, handleModeToggle, setIsPlaying };
