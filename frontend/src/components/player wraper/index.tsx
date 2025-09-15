import type { ReactNode, FC } from "react";
import classes from "./wraper.module.css";

type PlayerWraperPropsType = {
  children: ReactNode;
  className?: string
};

const PlayerWraper: FC<PlayerWraperPropsType> = ({ children, className = '' }) => (
  <div className={`${classes.wraper} ${className}`} role="presentation">
    {children}
  </div>
);

export default PlayerWraper;
