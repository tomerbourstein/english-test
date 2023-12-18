import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainCard from "./components/Main/MainCard.jsx";
import SideCard from "./components/Side/SideCard";

import Instructions from "./components/Main/Instructions.jsx";

function App() {
  return (
    <>
      <Header />
      <Instructions />
      <main>
        <MainCard />

        {/* <SideCard /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
