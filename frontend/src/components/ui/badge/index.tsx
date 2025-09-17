import type { FC, ReactNode } from "react";
import classes from "./badge.module.css";

type BadgeUIPropsType = {
  children: ReactNode;
};

const BadgeUI: FC<BadgeUIPropsType> = ({ children }) => (
  <span className={classes.badgeUI}>{children}</span>
);

export default BadgeUI;
