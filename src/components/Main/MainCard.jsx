import { useSelector } from "react-redux";

import Article from "./Article";
import Questions from "./Questions";
import ErrorAlert from "../UI/ErrorAlert";
import classes from "./MainCard.module.css";

const MainCard = () => {
  const validArticle = useSelector((state) => state.chat.resultText);
  const error = useSelector((state) => state.chat.error);

  return (
    <main>
      <div className={classes.notAnArticle}>
        {error && <ErrorAlert err={error} />}
      </div>

      <div className={classes.mainCard}>
        <Article validArticle={validArticle.article} />
        <Questions validQuestions={validArticle.questions} />
      </div>
    </main>
  );
};
export default MainCard;
