import { useSelector } from "react-redux";

import Article from "./Article";
import Questions from "./Questions";
import Loading from "../UI/Loading";
import ErrorAlert from "../UI/ErrorAlert";

import classes from "./MainCard.module.css";
const MainCard = () => {
  const validArticle = useSelector((state) => state.chat.resultText);
  const isLoading = useSelector((state) => state.chat.isLoading);
  const error = useSelector((state) => state.chat.error);
  return (
    <div className={classes.mainCard}>
      {validArticle && (
        <>
          <Article validArticle={validArticle.article} />
          <Questions validQuestions={validArticle.questions} />
        </>
      )}
      {isLoading && <Loading />}
      {error && <ErrorAlert err={error} />}
    </div>
  );
};
export default MainCard;
