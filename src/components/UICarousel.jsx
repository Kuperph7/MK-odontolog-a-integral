import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import UICards from "./UICards";
import "../styles/components/UICarouselCards.scss";

export default function UICarousel() {
  return (
    <div className="carouselCards">
      <Carousel>
        <div>
          <UICards
            title="ORTODONCÍA"
            text="La ortodoncia es el arte de corregir suavemente la sonrisa, realineando los dientes para una expresión radiante y saludable."
          />
        </div>
        <div>
          <UICards
            title="ENDONDONCÍA"
            text="La endodoncia rescata y preserva tus dientes, eliminando infecciones y brindando confort y funcionalidad duradera."
          />
        </div>
        <div>
          <UICards
            title="ODONTOPEDIATRÍA"
            text="La odontopediatría cuida las sonrisas más jóvenes con ternura, promoviendo hábitos saludables y garantizando un futuro bucal brillante."
          />
        </div>
        <div>
          <UICards
            title="PERIODONCÍA"
            text="La periodoncia revitaliza tus encías y fortalece tu sonrisa, previniendo y tratando enfermedades que afectan tu salud bucal."
          />
        </div>
        <div>
          <UICards
            title="CIRUGÍA E IMPLANTES"
            text="Las cirugías e implantes restauran la perfección oral, recuperando la plenitud de tu sonrisa y mejorando función y estética bucal."
          />
        </div>
      </Carousel>
    </div>
  );
}
