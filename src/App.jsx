import { useSelector } from "react-redux";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainCard from "./components/Main/MainCard";
import Summary from "./components/Main/Summary";
import Loading from "./components/UI/Loading";

import Instructions from "./components/Main/Instructions.jsx";

function App() {
  const validArticle = useSelector((state) => state.chat.resultText);
  const isArticle = useSelector((state) => state.chat.isArticle);
  const isLoading = useSelector((state) => state.chat.isLoading);
  const timeOver = useSelector((state) => state.chat.timeOver);
  return (
    <>
      {isLoading && <Loading />}
      {isArticle && validArticle && <Header />}
      {!isArticle && !isLoading && !timeOver && <Instructions />}
      {isArticle && validArticle && <MainCard />}
      {timeOver && validArticle && validArticle.result && (
        <Summary validQuestions={validArticle} />
      )}
      {isArticle && validArticle && <Footer />}
    </>
  );
}

export default App;
