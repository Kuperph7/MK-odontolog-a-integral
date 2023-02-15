import Header from "../components/Header";
import Hero from "../components/UIHero";
import { UIServices } from "../components/UIService";
import { UIAcercaDe } from "../components/UIAcercaDe.jsx";
import "../styles/global.scss";
import Footer from "../components/Footer";
import { UIStaff } from "../components/UIStaff";
import UIMaps from "../components/UIMaps";
import { UIUbicacion } from "../components/UIUbicacion";
import "bootstrap/dist/css/bootstrap.min.css";
import UICarousel from "../components/UICarousel";
import UICarouselStaff from "../components/UICarouselStaff";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <UIServices />
      <UICarousel />
      <UIAcercaDe />
      <UIStaff />
      <UICarouselStaff />
      <UIUbicacion />
      <Footer />
    </div>
  );
}

export default App;
