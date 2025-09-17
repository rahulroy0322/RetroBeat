import type { FC } from "react";
import { DiskandNobUI, RetroPlayerUI } from "../../ui/player";
import PlayerMute from "./mute";
import { useMusic } from "../../../store/music";
import { usePlayList } from "../../../store/playlist";
import PlayerVolume from "./volume";

const DiskandNob: FC = () => {
  const isPlaying = useMusic((state) => state.isPlaying);
  const song =
    usePlayList(
      (state) => state.queue.find((song) => song._id === state.id)!
    ) || {};

  return <DiskandNobUI isPlaying={isPlaying} song={song} />;
};

const RetroPlayer: FC = () => (
  <RetroPlayerUI>
    <PlayerMute />
    <DiskandNob />
    <PlayerVolume />
  </RetroPlayerUI>
);

export default RetroPlayer;
