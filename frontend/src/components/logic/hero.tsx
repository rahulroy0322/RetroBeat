import { useCallback, type FC } from "react";
import type { SongDataType } from "../../@types/song.types";
import { addToPlayList, setPlayingId } from "../../store/playlist";
import HeroSectionUI from "../ui/hero";

type HeroSectionPropsType = {
  song: SongDataType;
};

const HeroSection: FC<HeroSectionPropsType> = ({ song }) => {
  const handelClick = useCallback(() => {
    addToPlayList(song);
    setPlayingId(song._id);
  }, [song]);
  
  return <HeroSectionUI song={song} handleClick={handelClick} />;
};

export default HeroSection;
