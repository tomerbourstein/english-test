import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chatActions } from "../../store/chatSlice";
import { fetchChatCompletion } from "../../utils/requests";
import classes from "./Timer.module.css";

const Timer = () => {
  const [timerSeconds, setTimerSeconds] = useState(59);
  const [timerMinutes, setTimerMinutes] = useState(19);
  const category = useSelector((state) => state.chat.category);
  const responses = useSelector((state) => state.chat.quizResponses);
  const dispatch = useDispatch();
  const startTime = Date.now();

  const timePassedInSeconds = (startTime) => {
    const timePassed = () => Date.now() - startTime;
    const convertToSeconds = () => timePassed() / 1000;
    const countdown = () => 59 - Math.floor(convertToSeconds());
    if (countdown() < 10 && countdown() >= 0) return "0" + countdown();
    if (countdown() < 0) {
      setTimerMinutes((prevTime) => prevTime - 1);
      return 59;
    }
    return countdown();
  };

  const handleSubmitTest = () => {
    dispatch(chatActions.toggleDisplayArticle(false));
    dispatch(chatActions.endOfQuiz());
    dispatch(
      fetchChatCompletion({
        enteredCategory: category,
        testAnswers: responses,
      })
    );
  };

  useEffect(() => {
    if (timerMinutes < 19) {
      handleSubmitTest();
    }

    const timerInterval = setInterval(() => {
      setTimerSeconds(timePassedInSeconds(startTime));
    }, timePassedInSeconds());

    return () => {
      clearInterval(timerInterval);
    };
  }, [timerMinutes]);

  return (
    <div className={classes.countdown}>
      <div className={classes.cdBox}>
        <p className={classes.numbers}>
          <span>{timerMinutes}</span>:<span>{timerSeconds}</span>
        </p>
        <p className={classes.block}></p>
      </div>
    </div>
  );
};
export default Timer;
