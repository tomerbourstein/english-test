import classes from "./Article.module.css";
const Article = (props) => {
  const { validArticle } = props;

  const listOfPar = [];

  let split = validArticle.content.split("\n\n");
  split.forEach(function (item) {
    listOfPar.push(item);
  });

  return (
    <div className={classes.article}>
      <h1>{validArticle.title}</h1>
      {listOfPar.map((par, i) => (
        <p key={i}>{par}</p>
      ))}
    </div>
  );
};
export default Article;
