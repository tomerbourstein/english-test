import DATA from "../../../article.json";
import classes from "./SideCard.module.css";
const SideCard = () => {
  return (
    <div className={classes.sideCard}>
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
export default SideCard;
