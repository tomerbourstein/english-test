import DATA from "../article.json";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainCard from "./components/Main/MainCard.jsx";
import SideCard from "./components/Side/SideCard";
function App() {
  return (
    <>
      <Header />
      <main>
        <MainCard />
        <SideCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
