import DATA from "../../../article.json";
const Article = () => {
  const { article, questions } = DATA;
  const listOfPar = [];

  let split = article.content.split("\n\n");
  split.forEach(function (item) {
    listOfPar.push(item);
  });
  return (
    <div>
      <h1>{article.title}</h1>
      {listOfPar.map((par, i) => (
        <p key={i}>{par}</p>
      ))}
    </div>
  );
};
export default Article;
