import Header from "../components/Header";
import Hero from "../components/UIHero";
import { UIServices } from "../components/UIService";
import { UIAcercaDe } from "../components/UIAcercaDe.jsx";
import "../styles/global.scss";
import Footer from "../components/Footer";
import { UIStaff } from "../components/UIStaff";
import UIMaps from "../components/UIMaps";
import { UIUbicacion } from "../components/UIUbicacion";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UIServices />
      <UIAcercaDe />
      <UIStaff />

      {/* 
      <UIUbicacion />
      <Footer />
       */}
    </div>
  );
}

export default App;
