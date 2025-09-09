import { createRef, type RefObject } from "react";
import { create } from "zustand";
import { DEFAULT_VOLUME } from "../config/audio";

type UseAudioType = {
  current: number;
  setCurrent: (current: number) => void;

  duration: number;
  setDuration: (duration: number) => void;

  volume: number;
  setVolume: (volume: number) => void;

  muted: boolean;
  audioRef: RefObject<HTMLAudioElement>;
};

const useAudio = create<UseAudioType>((set, get) => ({
  current: 0,
  duration: 0,
  volume: 0,
  muted: true,
  audioRef: createRef<HTMLAudioElement>() as UseAudioType["audioRef"],

  setCurrent: (current) =>
    set({
      current,
    }),
  setDuration: (duration) =>
    set({
      duration,
    }),
  setVolume: (volume) =>
    set({
      volume,
      muted: get().audioRef.current.muted,
    }),
}));

const { getState: get, setState: set } = useAudio;

const handelSeek = (value: number) => {
  const audioRef = get().audioRef.current;
  if (audioRef) {
    audioRef.currentTime = value;
  }
};

const handelPlayChange = (play: boolean) => {
  const audioRef = get().audioRef.current;
  if (!audioRef) {
    return;
  }

  if (play) {
    audioRef.play();
    return;
  }
  audioRef.pause();
};

const handelVolumeChange = (volume: number) => {
  const audioRef = get().audioRef.current;
  if (audioRef) {
    audioRef.volume = volume / 100;

    if (!volume) {
      audioRef.muted = true;
      set({
        muted: true,
      });
      return;
    }

    if (audioRef.muted) {
      audioRef.muted = false;
      set({
        muted: false,
      });
    }
  }
};

const handelToggleMute = () => {
  const audioRef = get().audioRef.current;

  if (audioRef) {
    const muted = !audioRef.muted;
    audioRef.muted = muted;

    if (muted) {
      audioRef.volume = 0;
    } else {
      audioRef.volume = DEFAULT_VOLUME;
    }

    set({
      muted,
    });
  }
};


export {
  useAudio,
  handelSeek,
  handelToggleMute,
  handelPlayChange,
  handelVolumeChange,
};
