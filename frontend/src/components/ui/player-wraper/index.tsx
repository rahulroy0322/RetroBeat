import type { ReactNode, FC } from "react";
import classes from "./wraper.module.css";

type PlayerWraperUIPropsType = {
  children: ReactNode;
  className?: string
};

const PlayerWraperUI: FC<PlayerWraperUIPropsType> = ({ children, className = '' }) => (
  <div className={`${classes.wraper} ${className}`} role="presentation">
    {children}
  </div>
);

export default PlayerWraperUI;
