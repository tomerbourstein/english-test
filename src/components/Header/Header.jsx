import Typography from "@mui/material/Typography";
import TutorLogo from "../../assets/images/tutor_logo.svg";

import classes from "./Header.module.css";
import Timer from "./Timer";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={TutorLogo} />
      <Timer />
    </header>
  );
};

export default Header;
