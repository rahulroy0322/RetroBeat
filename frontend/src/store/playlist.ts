import { create } from "zustand";
import type { SongDataType } from "../@types/song.types";

type UsePlayListType = {
  queue: SongDataType[];
  id: SongDataType["_id"];
};

const usePlayList = create<UsePlayListType>(() => ({
  queue: [],
  id: "",
}));

const { getState: get, setState: set } = usePlayList;

const setPlayingId = (id: string) =>
  set({
    id,
  });

const setPlayList = (queue: UsePlayListType["queue"]) => {
  if (queue) {
    set({
      queue: [...new Set(queue)],
    });
    setPlayingId(queue.at(0)!._id);
  }
};

const addToPlayList = (song: SongDataType) => {
  if (!get().queue.length) {
    setPlayingId(song._id);
  }

  set({
    queue: [...new Set([...get().queue, song])],
  });
};

const removeFromPlayList = (id: SongDataType["_id"]) =>
  set({
    queue: [...get().queue.filter((song) => song._id !== id)],
  });

export {
  usePlayList,
  setPlayingId,
  addToPlayList,
  removeFromPlayList,
  setPlayList,
};
