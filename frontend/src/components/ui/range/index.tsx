import { useCallback, type ChangeEvent, type FC } from "react";
import classes from "./range.module.css";
import { getWidth } from "../../../utils/lib";

type RangeUIPropsType = {
  max: number;
  min: number;
  value: number;
  onValueChange: ((value: number) => void)|undefined
};

const RangeUI: FC<RangeUIPropsType> = ({ min, max, value, onValueChange }) => {
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(Number((e.target as HTMLInputElement).value));
    },
    [onValueChange]
  );

  return (
    <div className={classes["range-div"]}>
      <span
        className={classes.progress}
        style={{
          width: `${getWidth({ min, max, value })}%`,
        }}
      />
      <span className={classes.nib} />
      <input
        value={value}
        onInput={handleInputChange}
        min={min}
        max={max}
        type="range"
        className={classes.range}
      />
    </div>
  );
};

export default RangeUI;
