import { useCallback, type FC } from "react";
import classes from "./songs.module.css";
import type { SongDataType } from "../../@types/song.types";
import { useMusicInfo } from "../../store/music-info";

type SongItemPropsType = Pick<SongDataType, "title" | "thumbnail"> & {
  artist: string;
  id: string;
  onClick: (id: string) => void;
};

const SongItem: FC<SongItemPropsType> = ({
  artist,
  title,
  thumbnail,
  id,
  onClick,
}) => (
  <li onClick={() => onClick(id)} className={classes.item}>
    <figure className={classes.thubnail}>
      <img src={thumbnail} alt={title} />
    </figure>

    <div role="presentation">
      <h3>{title}</h3>
      <h4>{artist}</h4>
    </div>
  </li>
);

type SongListPropsType = {
  songs: SongDataType[];
};
const SongList: FC<SongListPropsType> = ({ songs }) => {
  const setInfo = useMusicInfo((state) => state.setInfo);
  const handelClick = useCallback(
    (id: string) => {
      const song = songs.find((song) => song._id === id);

      if (song) {
        setInfo({
          category: song.category,
          title: song.title,
          url: song.url,
          thumbnail: song.thumbnail,
        });
      }
    },
    [setInfo, songs]
  );

  return (
    <section className={classes.section}>
      <h2>Songs</h2>

      <ul className={classes.songs}>
        {songs.map(({ title, author, thumbnail, _id }) => (
          <SongItem
            title={title}
            thumbnail={thumbnail}
            artist={author.artist}
            id={_id}
            onClick={handelClick}
          />
        ))}
      </ul>
    </section>
  );
};

export default SongList;
