import Form from "./Form";
import classes from "./Instructions.module.css";

const Instructions = () => {
  return (
    <div className={classes.instructions}>
      <h3>
        Welcome to your AI English Tutor, before you begin please read the
        following instructions{" "}
      </h3>
      <p>Read The entire article before answering all questions</p>
      <p>The answers to the questions are provided in the text</p>
      <p>Submit your answers and correct your mistakes</p>
      <p className={classes.startAction}>
        When you're ready, fill in the preferred subject and click GO
      </p>

      <Form />
    </div>
  );
};
export default Instructions;
