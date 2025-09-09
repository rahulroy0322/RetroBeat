import { create } from "zustand";
import type { SongDataType } from "../@types/song.types";

type InfoType = Pick<SongDataType, "category" | "thumbnail" | "title" | "url">;

type UseInfoType = {
  setInfo: (info: InfoType) => void;
} & InfoType;

const useMusicInfo = create<UseInfoType>((set) => ({
  title: "",
  url: "",
  category: "",
  thumbnail: "",

  setInfo: (info) => set(info),
}));

export { useMusicInfo };
