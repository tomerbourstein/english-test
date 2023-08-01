import ArticleMap from "./ArticleMap";
import Instructions from "./Instructions";
import classes from "./SideCard.module.css";
const SideCard = () => {
  return (
    <div className={classes.sideCard}>
      <Instructions />
      <ArticleMap />
    </div>
  );
};
export default SideCard;
