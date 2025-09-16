import { useCallback, useState, type FC } from "react";
import classes from "./aside.module.css";
import { ChevronIcon } from "../../icons";
import RetroPlayer from "../player";
import PlayerInfo from "../player info";
import PlayerWraper from "../player wraper";
import PlayerActions from "../actions";
import PlayerAudio from "../audio";
import PlayerEvents from "../events";
import PlayListQueue from "../play-list-queue";

const AsidePlayer: FC = () => {
  const [open, setOpen] = useState(false);

  const handleToggleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);


  return (
    <aside className={`${classes.aside} ${open ? classes.open : ""}`}>
      <button className={classes.toggle} onClick={handleToggleOpen}>
        <ChevronIcon open={open} />
      </button>
      <PlayerWraper>
        <RetroPlayer />
        <PlayerInfo />

        <PlayerActions />

        <PlayerAudio />
        <PlayerEvents />
      </PlayerWraper>

      <PlayListQueue />
    </aside>
  );
};

export default AsidePlayer;
