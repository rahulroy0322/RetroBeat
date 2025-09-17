import type { FC, ReactNode } from "react";
import classes from "./aside.module.css";
import { ChevronIcon } from "../../../icons";

type AsidePlayerUIPropsType = {
  open: boolean;
  handleClick: () => void;
  children: ReactNode;
};

const AsidePlayerUI: FC<AsidePlayerUIPropsType> = ({
  open,
  handleClick,
  children,
}) => (
  <aside className={`${classes.aside} ${open ? classes.open : ""}`}>
    <button className={classes.toggle} onClick={handleClick}>
      <ChevronIcon open={open} />
    </button>
    {children}
  </aside>
);

export default AsidePlayerUI;
