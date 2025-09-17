import { type FC } from "react";
import type { ArtistType } from "../../@types/artist.types";
import TopArtistSectionUI from "../ui/top-artist";

type TopArtistSectionPropsType = {
  artists: ArtistType[];
};

const TopArtistSection: FC<TopArtistSectionPropsType> = ({ artists }) => (
  <TopArtistSectionUI artists={artists} />
);
export default TopArtistSection;
