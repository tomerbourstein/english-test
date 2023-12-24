import { useSelector } from "react-redux";

import Article from "./Article";
import Questions from "./Questions";
import Summary from "./Summary";
import Loading from "../UI/Loading";
import ErrorAlert from "../UI/ErrorAlert";
import classes from "./MainCard.module.css";
import { DUMMY_DATA } from "../../utils/DUMMY";

const MainCard = () => {
  const validArticle = useSelector((state) => state.chat.resultText);
  const isLoading = useSelector((state) => state.chat.isLoading);
  const error = useSelector((state) => state.chat.error);
  const isArticle = useSelector((state) => state.chat.isArticle);

  return (
    <div>
      <div className={classes.notAnArticle}>
        {isLoading && <Loading />}
        {error && <ErrorAlert err={error} />}
      </div>

      <div className={classes.mainCard}>
        {/* {DUMMY_DATA && (
          <>
            <Article validArticle={DUMMY_DATA.article} />
            <Questions validQuestions={DUMMY_DATA.questions} />
          </>
        )} */}

        {isArticle && validArticle && (
          <>
            <Article validArticle={validArticle.article} />
            <Questions validQuestions={validArticle.questions} />
          </>
        )}
        {validArticle && validArticle.result && (
          <Summary validQuestions={validArticle} />
        )}
      </div>
    </div>
  );
};
export default MainCard;
