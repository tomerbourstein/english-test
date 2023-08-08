import SvgIcon from "@mui/material/SvgIcon";
import WarningIcon from "@mui/icons-material/Warning";
import classes from "./ErrorAlert.module.css";
const ErrorAlert = (props) => {
  return (
    <div className={classes.alert}>
      <div className={classes.alertTitle}>
        <WarningIcon />
        <p>An error has occurred</p>
      </div>
      <p>
        System indicates a <b>{props.err}</b>.
      </p>
    </div>
  );
};

export default ErrorAlert;
