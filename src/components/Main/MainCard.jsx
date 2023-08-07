import { useSelector } from "react-redux";

import Article from "./Article";
import classes from "./MainCard.module.css";
import Questions from "./Questions";
const MainCard = () => {
  const validArticle = useSelector((state) => state.chat.resultText);
  const isLoading = useSelector((state) => state.chat.isLoading);
  const error = useSelector((state) => state.chat.error);

  return (
    <div className={classes.mainCard}>
      {validArticle && (
        <>
          <Article validArticle={validArticle.article} />
          <Questions validQuestions = {validArticle.questions}/>
        </>
      )}
    </div>
  );
};
export default MainCard;
