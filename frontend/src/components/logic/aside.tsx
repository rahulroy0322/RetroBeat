import { useCallback, useState, type FC } from "react";
import AsidePlayerUI from "../ui/aside";
import PlayerWraperUI from "../ui/player-wraper";
import PlayerAudio from "./audio";
import PlayerInfo from "./player-info";
import PlayerActions from "./actions";
import RetroPlayer from "./player";
import PlayerEvents from "./events";
import PlayListQueue from "./play-list-queue";

const AsidePlayer: FC = () => {
  const [open, setOpen] = useState(true);

  const handleToggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <AsidePlayerUI open={open} handleClick={handleToggleOpen}>
      <PlayerWraperUI>
        <RetroPlayer />
        <PlayerInfo />
        <PlayerActions />
        <PlayerAudio />

        <PlayerEvents />
      </PlayerWraperUI>
      <PlayListQueue />
    </AsidePlayerUI>
  );
};

export default AsidePlayer;
