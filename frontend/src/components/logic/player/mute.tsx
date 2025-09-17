import type { FC } from "react";
import { handelToggleMute, useAudio } from "../../../store/audio";
import PlayerMuteUI from "../../ui/player/mute";

const PlayerMute: FC = () => {
  const muted = useAudio((state) => state.muted);

  return <PlayerMuteUI muted={muted} handleClick={handelToggleMute} />;
};

export default PlayerMute;
