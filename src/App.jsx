import DATA from "../article.json";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainCard from "./components/Main/MainCard.jsx";
import SideCard from "./components/Side/SideCard";

import Divider from "@mui/material/Divider";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainCard />
        <Divider orientation="vertical" flexItem />

        <SideCard />
      </main>
      <Footer />
    </>
  );
}

export default App;
