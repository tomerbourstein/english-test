import { useSelector } from "react-redux";

import Article from "./Article";
import Questions from "./Questions";
import ErrorAlert from "../UI/ErrorAlert";
import classes from "./MainCard.module.css";
import { DUMMY_DATA } from "../../utils/DUMMY";

const MainCard = () => {
  const validArticle = useSelector((state) => state.chat.resultText);
  const error = useSelector((state) => state.chat.error);
  const isArticle = useSelector((state) => state.chat.isArticle);

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
