import { type FC } from "react";
import classes from "./artist.module.css";
import type { ArtistType } from "../../@types/artist.types";

type ArtistPropsType = ArtistType;

const Artist: FC<ArtistPropsType> = ({ artist, avatar }) => (
  <li className={classes.artist}>
    <a href="#">
      <figure className={classes.avatar} role="presentation">
        <img src={avatar} alt={artist} />
      </figure>
      <h3>{artist}</h3>
    </a>
  </li>
);

type TopArtistPropsType = {
  artists: ArtistType[];
};

const TopArtistSection: FC<TopArtistPropsType> = ({ artists }) => {
  return (
    <section className={classes.section}>
      <div className={classes.info} role="presentation">
        <h2>Top Artists</h2>

        <a href="#">See all</a>
      </div>

      <ol className={classes.artists}>
        {artists.map(({ artist, avatar }) => (
          <Artist artist={artist} avatar={avatar} />
        ))}
      </ol>
    </section>
  );
};

export default TopArtistSection;
