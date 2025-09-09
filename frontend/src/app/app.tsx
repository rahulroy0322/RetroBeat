import { type FC } from "react";
import classes from "./app.module.css";
import Header from "../components/header";
import NavBar from "../components/nav";
import AsidePlayer from "../components/aside";
import HomePage from "../components/home";

const App: FC = () => {
  return (
    <div className={`full ${classes.app}`} role="presentation">
      <Header />

      <div className={classes.screen} role="presentation">
        <NavBar />

        <main className={classes.main}>
          <HomePage />
        </main>
        <AsidePlayer />
      </div>
    </div>
  );
};

export default App;
