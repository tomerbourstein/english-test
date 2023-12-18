import { useSelector } from "react-redux";

import ArticleMap from "./ArticleMap";
import Instructions from "../Main/Instructions";
import classes from "./SideCard.module.css";
import Timer from "../Header/Timer";
const SideCard = () => {
  const validArticle = useSelector((state) => state.chat.resultText);

  return (
    <div className={classes.sideCard}>
      <Instructions />
      <div className={classes.timerAndMap}>
        <Timer />
        {validArticle && <ArticleMap article={validArticle.article} />}
      </div>
    </div>
  );
};
export default SideCard;
