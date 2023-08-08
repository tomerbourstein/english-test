import classes from "./Instructions.module.css";

const Instructions = () => {
  return (
    <div className={classes.instructions}>
      <h2>INSTRUCTIONS</h2>
      <ol>
        <li>Read The Article</li>
        <li>Answer All Questions</li>
        <li>Submit Your Answer</li>
        <li>Check Your Answers</li>
      </ol>
    </div>
  );
};
export default Instructions;
