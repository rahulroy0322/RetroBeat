import type { FC, ReactNode } from "react";
import classes from "./songs.module.css";
import type { SongDataType } from "../../../@types/song.types";
import { TrashIcon } from "../../../icons";

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

type SongListQueueUIPropsType = {
  songs: SongDataType[];
  handelClick: (id: string) => void;
  handelRemove: (id: string) => void;
};

const SongListQueueUI: FC<SongListQueueUIPropsType> = ({
  songs,
  handelClick,
  handelRemove,
}) => (
  <SongListUi
    isQueue
    songs={songs}
    handelClick={handelClick}
    onDelete={handelRemove}
  />
);

type SongListHomePageUIPropsType = {
  songs: SongDataType[];
  handelClick: (id: string) => void;
};

const SongListHomePageUI: FC<SongListHomePageUIPropsType> = ({
  songs,
  handelClick,
}) => (
  <SongListUi songs={songs} handelClick={handelClick} onDelete={undefined} />
);

type SongListSectionUIPropsType = {
  children: ReactNode;
};

const SongListSectionUI: FC<SongListSectionUIPropsType> = ({ children }) => (
  <section className={classes.section}>
    <h2>Songs</h2>
    {children}
  </section>
);

export { SongListSectionUI, SongListHomePageUI, SongListQueueUI };
