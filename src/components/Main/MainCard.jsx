import Article from "./Article";
import classes from "./MainCard.module.css";
const MainCard = () => {
  return (
    <div className={classes.mainCard}>
      <Article />
    </div>
  );
};
export default MainCard;
