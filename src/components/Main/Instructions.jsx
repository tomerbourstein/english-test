import Form from "./Form";

import WavingHand from "../../assets/images/waving-hand-48.png";
import classes from "./Instructions.module.css";

const Instructions = () => {
  return (
    <div className={classes.container}>
      <div className={classes.instructions}>
        <h2>
          HI! I'm your AI Tutor
          <img src={WavingHand} />
        </h2>
        <h3>before you begin please read the following instructions </h3>
        <p>Read The entire article before answering all questions</p>
        <p>The answers to the questions are provided in the text</p>
        <p>Submit your answers and correct your mistakes</p>
        <p className={classes.startAction}>
          When you're ready, fill in the preferred subject and click GO
        </p>

        <Form />
      </div>

      <div className={classes.crop}>
        <img src="https://external-preview.redd.it/i-made-a-quiz-all-about-sly-2-comment-your-score-and-lets-v0-pt-28k_O6SMced2-okQHmSdb9drdMDTmMX-aCAUjGdQ.jpg?auto=webp&s=c0ea3102f45005d9018908f1635744432963eac1" />
      </div>
    </div>
  );
};
export default Instructions;
