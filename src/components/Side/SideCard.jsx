import { useSelector } from "react-redux";

import ArticleMap from "./ArticleMap";
import Instructions from "./Instructions";
import classes from "./SideCard.module.css";
import Timer from "./Timer";
const SideCard = () => {
  const validArticle = useSelector((state) => state.chat.resultText);

  return (
    <div className={classes.sideCard}>
      <Instructions />
      <div className={classes.timerAndMap}>
        <Timer />
        {validArticle && <ArticleMap />}
      </div>
    </div>
  );
};
export default SideCard;
