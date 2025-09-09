import type { FC, ReactNode } from "react";
import classes from "./badge.module.css";

type BadgePropsType = {
  children: ReactNode;
};

const Badge: FC<BadgePropsType> = ({ children }) => (
  <span className={classes.badge}>{children}</span>
);

export default Badge;
