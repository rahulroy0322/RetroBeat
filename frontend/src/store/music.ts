import { create } from "zustand";

type ModeType = "one" | "all" | "none";

type UseMusicType = {
  mode: ModeType;

  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
};

const useMusic = create<UseMusicType>((set) => ({
  mode: "none",
  isPlaying: false,

  setIsPlaying: (isPlaying) =>
    set({
      isPlaying,
    }),
}));

const { getState: get, setState: set } = useMusic;

const handleModeToggle = () => {
  const _mode = get().mode;
  const mode = _mode === "none" ? "all" : _mode === "all" ? "one" : "none";

  set({
    mode,
  });
};

export { useMusic, handleModeToggle };
