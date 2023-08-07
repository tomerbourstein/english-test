import { Typography } from "@mui/material";
import classes from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={classes.container}>
      <div className={classes.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={classes.loadingText}>
        <Typography>Please wait while we generate your test.</Typography>
        <Typography>It could take a minute.</Typography>
      </div>
    </div>
  );
};

export default Loading;
