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
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <UICards
          title="ENDONDONCÍA"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <UICards
          title="ODONTOPEDIATRÍA"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <UICards
          title="PERIODONCÍA"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <UICards
          title="CIRUGÍA E IMPLANTES"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
}
