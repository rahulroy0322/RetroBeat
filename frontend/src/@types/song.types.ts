import type { ArtistType } from "./artist.types";

type SongDataType = {
  _id: string;
  title: string;
  thumbnail: string;
  category: string;
  url: string;
  author: ArtistType;
};

export type { SongDataType };
