import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Timer.module.css";

const Timer = () => {
  const [timerSeconds, setTimerSeconds] = useState(59);
  const [timerMinutes, setTimerMinutes] = useState(19);
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

  useEffect(() => {
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
