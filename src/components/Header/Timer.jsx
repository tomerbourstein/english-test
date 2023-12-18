import { duration } from "@mui/material";
import classes from "./Timer.module.css";

const Timer = () => {
  return (
    <div>
      <div className={classes.outerCircle}>
        <div className={classes.innerCircle}>19:59</div>
      </div>
    </div>
  );
};
export default Timer;
