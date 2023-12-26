import { useDispatch } from "react-redux";
import { chatActions } from "../../store/chatSlice";
import Questions from "./Questions";
import Button from "@mui/material/Button";
import SummaryIcon from "../../assets/images/summary-icon.png";

import classes from "./Summary.module.css";
const Summary = (props) => {
  const { result, questions } = props.validQuestions;
  const dispatch = useDispatch();

  const startOverHandler = () => {
    dispatch(chatActions.toggleLoadingScreen(true));

    setInterval(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <div className={classes.container}>
      <div className={classes.crop}>
        <img src={SummaryIcon} />
        <div className={classes.shape}></div>
      </div>
      <div className={classes.summary}>
        <div className={classes.numericAndVerbal}>
          <h2>{result.numericScore} / 10</h2>
          <p>{result.verbalScore}</p>
        </div>
        <Questions result={result} validQuestions={questions} />
        <div className={classes.startOver}>
          <Button variant="contained" onClick={startOverHandler}>
            start over
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Summary;
