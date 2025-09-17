import { useMemo, type FC } from "react";
import { PlayerInfoUI, PlayerRangeUI } from "../ui/player-info";
import { usePlayList } from "../../store/playlist";
import { handelSeek, useAudio } from "../../store/audio";
import { formateTime } from "../../utils/lib";

const PlayerRange: FC = () => {
  const min = 0;
  const max = useAudio((state) => state.duration);

  const current = useAudio((state) => state.current);

  const currentTime = useMemo(() => formateTime(current), [current]);
  const endTime = useMemo(() => formateTime(max), [max]);

  return (
    <PlayerRangeUI
      min={min}
      max={max}
      current={current}
      currentTime={currentTime}
      endTime={endTime}
      handleSeek={handelSeek}
    />
  );
};

const PlayerInfo: FC = () => {
  const song =
    usePlayList(
      (state) => state.queue.find((song) => song._id === state.id)!
    ) || {};

  return (
    <PlayerInfoUI song={song}>
      <PlayerRange />
    </PlayerInfoUI>
  );
};

export default PlayerInfo;
