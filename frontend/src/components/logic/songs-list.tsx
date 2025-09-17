import { useCallback, type FC } from "react";
import type { SongDataType } from "../../@types/song.types";
import { usePlayList, setPlayingId, addToPlayList } from "../../store/playlist";
import { SongListSectionUI, SongListHomePageUI } from "../ui/songs-list";

type SongListSectionPropsType = {
  songs: SongDataType[];
};

const SongListSection: FC<SongListSectionPropsType> = ({ songs }) => {
  const handelClick = useCallback(
    (id: string) => {
      const song = songs.find((song) => song._id === id);

      if (song) {
        if (!usePlayList.getState().queue.length) {
          setPlayingId(song._id);
        }
        addToPlayList(song);
      }
    },
    [songs]
  );

  return (
    <SongListSectionUI>
      <SongListHomePageUI songs={songs} handelClick={handelClick} />
    </SongListSectionUI>
  );
};

export { SongListSection };
