import "../styles/components/UIServices.scss";
import UICards from "./UICards";

export function UIServices() {
  return (
    <div className="services-content" id="servicios">
      <div className="services-content-titles">
        <h2>Servicios</h2>
        <p>Todo lo que podemos hacer por tus dientes</p>
      </div>
      <div className="services-content-proyects">
        <UICards
          title="ORTODONCÍA"
          text="La ortodoncia es el arte de corregir suavemente la sonrisa, realineando los dientes para una expresión radiante y saludable."
        />
        <UICards
          title="ENDONDONCÍA"
          text="La endodoncia rescata y preserva tus dientes, eliminando infecciones y brindando confort y funcionalidad duradera."
        />
        <UICards
          title="ODONTOPEDIATRÍA"
          text="La odontopediatría cuida las sonrisas más jóvenes con ternura, promoviendo hábitos saludables y garantizando un futuro bucal brillante."
        />
        <UICards
          title="PERIODONCÍA"
          text="La periodoncia revitaliza tus encías y fortalece tu sonrisa, previniendo y tratando enfermedades que afectan tu salud bucal."
        />
        <UICards
          title="CIRUGÍA E IMPLANTES"
          text="Las cirugías e implantes restauran la perfección oral, recuperando la plenitud de tu sonrisa y mejorando función y estética bucal."
        />
      </div>
    </div>
  );
}
