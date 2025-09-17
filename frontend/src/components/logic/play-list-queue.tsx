import { useCallback, type FC } from "react";
import {
  removeFromPlayList,
  setPlayingId,
  usePlayList,
} from "../../store/playlist";
import PlayListQueueUI from "../ui/play-list-queue";
import { SongListQueueUI } from "../ui/songs-list";

const PlayListQueue: FC = () => {
  const queue = usePlayList((state) => state.queue);

  const handelClick = useCallback(
    (id: string) => {
      const song = queue.find((song) => song._id === id);

      if (song) {
        setPlayingId(song._id);
      }
    },
    [queue]
  );

  return (
    <PlayListQueueUI>
      <SongListQueueUI
        songs={queue}
        handelClick={handelClick}
        handelRemove={removeFromPlayList}
      />
    </PlayListQueueUI>
  );
};

export default PlayListQueue;
