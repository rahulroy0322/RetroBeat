import type { ReactNode, FC } from "react";
import classes from "./wraper.module.css";

type PlayerWraperPropsType = {
  children: ReactNode;
};

const PlayerWraper: FC<PlayerWraperPropsType> = ({ children }) => (
  <div className={classes.wraper} role="presentation">
    {children}
  </div>
);

export default PlayerWraper;
