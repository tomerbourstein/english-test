import Article from "./Article";
import classes from "./MainCard.module.css";
import Questions from "./Questions";
const MainCard = () => {
  return (
    <div className={classes.mainCard}>
      <Article />
      <Questions />
    </div>
  );
};
export default MainCard;
