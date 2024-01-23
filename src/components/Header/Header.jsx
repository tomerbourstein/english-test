import Typography from "@mui/material/Typography";
import TutorLogo from "../../../public/tutor_logo.svg";

import classes from "./Header.module.css";
import Timer from "./Timer";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={TutorLogo.src} />
      <Timer />
    </header>
  );
};

export default Header;
