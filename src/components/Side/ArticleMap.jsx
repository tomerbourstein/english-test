import DATA from "../../../article.json";

import classes from "./ArticleMap.module.css";
const ArticleMap = () => {
  const { article, questions } = DATA;
  const listOfPar = [];

  let split = article.content.split("\n\n");
  split.forEach(function (item) {
    listOfPar.push(item);
  });

  return (
    <div className={classes.map}>
      {listOfPar.map((par, i) => (
        <p key={i}>{par.substring(0, 50).concat("...")}</p>
      ))}
    </div>
  );
};

export default ArticleMap;
