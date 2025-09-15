import { useCallback, type FC } from "react";
import classes from "./songs.module.css";
import type { SongDataType } from "../../@types/song.types";
import {
  addToPlayList,
  removeFromPlayList,
  setPlayingId,
  usePlayList,
} from "../../store/playlist";
import { TrashIcon } from "../../icons";

type SongItemPropsType = Pick<SongDataType, "title" | "thumbnail"> & {
  artist: string;
  id: string;
  onClick: (id: string) => void;

  isQueue: boolean;
  onDelete: ((id: string) => void) | (() => void);
};

const SongItem: FC<SongItemPropsType> = ({
  artist,
  title,
  thumbnail,
  id,
  onClick,
  isQueue,
  onDelete,
}) => (
  <li onClick={() => onClick(id)} className={classes.item}>
    <figure className={classes.thubnail}>
      <img src={thumbnail} alt={title} />
    </figure>

    <div className={classes.info} role="presentation">
      <h3>{title}</h3>
      <h4>{artist}</h4>
    </div>
    {!isQueue ? null : (
      <button onClick={() => onDelete(id)} className={classes.trash}>
        <TrashIcon />
      </button>
    )}
  </li>
);

type SongListUiPropsType = {
  songs: SongDataType[];
  isQueue?: boolean;
  handelClick: SongItemPropsType["onClick"];
  onDelete?: (id: string) => void;
};

const dummyDelete = () => {};

const SongListUi: FC<SongListUiPropsType> = ({
  isQueue = false,
  songs,
  handelClick,
  onDelete = dummyDelete,
}) => (
  <ul className={classes.songs}>
    {songs.map(({ title, author, thumbnail, _id }) => (
      <SongItem
        isQueue={isQueue}
        title={title}
        thumbnail={thumbnail}
        artist={author.artist}
        id={_id}
        onClick={handelClick}
        onDelete={onDelete}
      />
    ))}
  </ul>
);

type SongListHomePagePropsType = {
  songs: SongDataType[];
};

const SongListQueue: FC<SongListHomePagePropsType> = ({ songs }) => {
  const handelClick = useCallback(
    (id: string) => {
      const song = songs.find((song) => song._id === id);

      if (song) {
        setPlayingId(song._id);
      }
    },
    [songs]
  );

  return (
    <SongListUi
      isQueue
      songs={songs}
      handelClick={handelClick}
      onDelete={removeFromPlayList}
    />
  );
};

const SongListHomePage: FC<SongListHomePagePropsType> = ({ songs }) => {
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
    <SongListUi songs={songs} handelClick={handelClick} onDelete={undefined} />
  );
};

type SongListPropsType = {
  songs: SongDataType[];
  isQueue?: boolean;
};

const SongList: FC<SongListPropsType> = ({ songs, isQueue = false }) =>
  isQueue ? (
    <SongListQueue songs={songs} />
  ) : (
    <SongListHomePage songs={songs} />
  );

type SongListSectionPropsType = {
  songs: SongDataType[];
};

const SongListSection: FC<SongListSectionPropsType> = ({ songs }) => (
  <section className={classes.section}>
    <h2>Songs</h2>

    <SongList songs={songs} isQueue={false} />
  </section>
);

export { SongList, SongListSection };
