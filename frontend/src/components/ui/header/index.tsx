import type { FC } from "react";
import classes from "./header.module.css";
import SearchIcon from "../../../icons/search";

type HeaderUIPropsType = {
  input: string;
  setInput: (input: string) => void;
};

const HeaderUI: FC<HeaderUIPropsType> = ({ input, setInput }) => (
  <header className={classes.header}>
    <h1 className={classes.logo}>
      Retro<span className={classes.highlight}>Beat</span>
    </h1>

    <div className={classes.search}>
      <SearchIcon />
      <input
        value={input}
        onChange={(e) => setInput((e.target as HTMLInputElement).value)}
        type="text"
        placeholder="Search you want to listen..."
      />
    </div>
    <div></div>
  </header>
);

export default HeaderUI;
