import { type FC } from "react";
import classes from "./app.module.css";
import Header from "../components/logic/header";
import NavBar from "../components/logic/nav";
import HomePage from "../components/pages/home";
import AsidePlayer from "../components/logic/aside";

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
