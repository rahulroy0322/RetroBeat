import { cache, Suspense, use, type FC } from "react";
// import classes from "./home.module.css";
import type { SongDataType } from "../../../@types/song.types";

const getSongData = cache(async () => {
  const res = await fetch("/dummy-data.json");

  return (await res.json()) as SongDataType[];
});

const HomePageImpl: FC =  () => {
  const data = use(getSongData());

  return (
    <div role="presentation">
      axsakxkas
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

const HomePage: FC = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <HomePageImpl />
    </Suspense>
  );
};

export default HomePage;
