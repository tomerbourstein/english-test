import Typography from "@mui/material/Typography";

import classes from "./Header.module.css";
import Timer from "./Timer";

const Header = () => {
  return (
    <header className={classes.header}>
      <Typography>AI Tutor</Typography>

      <Timer />
    </header>
  );
};

export default Header;
