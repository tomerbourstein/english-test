import { Typography } from "@mui/material";
import classes from "./Loading.module.css";
const Loading = (props) => {

  return (
    <div className={classes.container}>
      <div className={classes.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={classes.loadingText}>
        <Typography>I'm working behind the scenes</Typography>
        <Typography>It could take a minute</Typography>
      </div>
    </div>
  );
};

export default Loading;
