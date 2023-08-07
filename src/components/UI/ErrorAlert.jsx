import classes from "./ErrorAlert.module.css";
const ErrorAlert = (props) => {
  return (
    <div className={classes.alert}>
      Indicates a <b>{props.err}</b>.
    </div>
  );
};

export default ErrorAlert;
