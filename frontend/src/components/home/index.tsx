import { cache, Suspense, use, type FC } from "react";
// import classes from "./home.module.css";
import HeroSection from "../hero";
import TopArtistSection from "../top artist";
import {SongListSection} from "../songs list";
import type { SongDataType } from "../../@types/song.types";

const getSongData = cache(async () => {
  const res = await fetch("/dummy-data.json");

  return (await res.json()) as SongDataType[];
});

type HomePageImplPropsType = {
  promise: ReturnType<typeof getSongData>;
};

const HomePageImpl: FC<HomePageImplPropsType> = ({ promise }) => {
  const data = use(promise);

  const topSong = data.at(Math.floor(Math.random() * data.length))!;
  const artists = data.map((song) => ({ ...song.author }));

  return (
    <div role="presentation">
      {/* todo make impl */}
      <HeroSection song={topSong} />
      <TopArtistSection artists={artists} />
      <SongListSection songs={data} />
    </div>
  );
};

const HomePage: FC = () => {
  const promise = getSongData();
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HomePageImpl promise={promise} />
    </Suspense>
  );
};

export default HomePage;
