import ArticleMap from "./ArticleMap";
import Instructions from "./Instructions";
import classes from "./SideCard.module.css";
import Timer from "./Timer";
const SideCard = () => {
  return (
    <div className={classes.sideCard}>
      <Instructions />
      <div className={classes.timerAndMap}>
        <Timer />
        <ArticleMap />
      </div>
    </div>
  );
};
export default SideCard;
