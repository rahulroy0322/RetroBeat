import type { FC } from "react";
import classes from "./nav.module.css";
import {
  HomeIcon,
  HeartIcon,
  MusicIcon,
  LibraryIcon,
  SettingIcon,
  TagIcon,
} from "../../icons";

const NavBar: FC = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.ul}>
        <li>
          <a href="#">
            <HomeIcon />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HeartIcon />
            <span>Favorites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <MusicIcon />
            <span>Discover</span>
          </a>
        </li>
        <li>
          <a href="#">
            <LibraryIcon />
            <span>Play Lists</span>
          </a>
        </li>
        <li>
          <a href="#">
            <SettingIcon />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#">
            <TagIcon />
            <span>Tags</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
